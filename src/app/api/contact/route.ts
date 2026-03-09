import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
    try {
        const body = await request.json()

        // Initialize vanilla Supabase client for a public API route to avoid cookie parsing errors
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        )

        const { error } = await supabase.from('contact_leads').insert([
            {
                name: body.name,
                email: body.email,
                phone: body.phone,
                website: body.website,
                project_details: body.projectDetails,
                budget: body.budget,
                area_of_interest: body.areaOfInterest
            }
        ])

        if (error) throw error

        return NextResponse.json({ success: true, message: "Lead submitted successfully" })
    } catch (error) {
        console.error("Contact Form Submission Error:", error)
        return NextResponse.json({ success: false, message: "Failed to process lead" }, { status: 500 })
    }
}
