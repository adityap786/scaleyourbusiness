import { createClient } from '@supabase/supabase-js'
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

        // Delegate directly to the Supabase Edge Function which handles DB insert + Welcome Email
        const edgeRes = await fetch("https://rxcqgvktsnmxhrelfkmg.supabase.co/functions/v1/resend-newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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
