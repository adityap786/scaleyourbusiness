import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

const CANONICAL_HOST = 'scaleyourbusiness.online'

export async function middleware(request: NextRequest) {
    const host = request.headers.get('host') || ''
    const pathname = request.nextUrl.pathname

    // Only run Supabase session refresh for admin routes that need auth
    const needsAuth = pathname.startsWith('/admin') || pathname.startsWith('/login')

    if (needsAuth) {
        try {
            const response = await updateSession(request)
            // Also block SEO on non-canonical hosts
            if (!host.includes(CANONICAL_HOST)) {
                response.headers.set('X-Robots-Tag', 'noindex, nofollow')
            }
            return response
        } catch {
            // If Supabase middleware fails, continue without it
            const response = NextResponse.next()
            if (!host.includes(CANONICAL_HOST)) {
                response.headers.set('X-Robots-Tag', 'noindex, nofollow')
            }
            return response
        }
    }

    // For all other routes, just handle SEO blocking — no Supabase overhead
    const response = NextResponse.next()
    if (!host.includes(CANONICAL_HOST)) {
        response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    }
    return response
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)',
    ],
}
