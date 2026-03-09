import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const body = await req.json()

        // Basic server-side validation to prevent pointless proxying
        if (body.projectDetails && body.projectDetails.length > 500) {
            return NextResponse.json(
                { error: 'Project details exceeded maximum length' },
                { status: 400 }
            )
        }

        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!supabaseServiceKey) {
            console.error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable");
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }

        // Delegate to the heavily locked down Edge Function
        const edgeRes = await fetch("https://rxcqgvktsnmxhrelfkmg.supabase.co/functions/v1/resend-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Proxying client IP to edge function for rate limiting
                "x-forwarded-for": req.headers.get("x-forwarded-for") || 'unknown',
                // Military-grade lockdown secret
                "x-service-api-key": supabaseServiceKey
            },
            body: JSON.stringify(body),
        });

        const data = await edgeRes.json();

        if (!edgeRes.ok) {
            return NextResponse.json(
                { error: data.error || 'Failed to submit contact form' },
                { status: edgeRes.status }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Successfully submitted' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact API error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
