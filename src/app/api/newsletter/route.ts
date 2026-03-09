import { NextResponse } from 'next/server'

// Note: Using the service role key to bypass RLS for inserting subscribers
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, device_id } = body

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            )
        }

        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!supabaseServiceKey) {
            console.error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable");
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }

        // Delegate to the hardened Edge Function with service key
        const edgeRes = await fetch("https://rxcqgvktsnmxhrelfkmg.supabase.co/functions/v1/resend-newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-forwarded-for": req.headers.get("x-forwarded-for") || 'unknown',
                "x-service-api-key": supabaseServiceKey
            },
            body: JSON.stringify({ email, device_id }),
        });

        const data = await edgeRes.json();

        if (!edgeRes.ok) {
            return NextResponse.json(
                { error: data.error || 'Failed to subscribe' },
                { status: edgeRes.status }
            );
        }

        return NextResponse.json(
            { message: 'Successfully subscribed to the newsletter' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Newsletter API error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
