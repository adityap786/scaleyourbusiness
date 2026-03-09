import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

const CANONICAL_HOST = 'scaleyourbusiness.online'

export async function middleware(request: NextRequest) {
    const host = request.headers.get('host') || ''

    // Block SEO indexing on non-canonical domains (e.g. *.vercel.app, preview deployments)
    if (!host.includes(CANONICAL_HOST)) {
        const response = await updateSession(request)
        response.headers.set('X-Robots-Tag', 'noindex, nofollow')
        return response
    }

    return await updateSession(request)
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder assets
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)',
    ],
}
