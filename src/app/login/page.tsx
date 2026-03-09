import { login } from './actions'

export default function LoginPage() {
    return (
        <div className="flex bg-black min-h-screen items-center justify-center p-4 selection:bg-brand selection:text-white">
            <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black text-white tracking-tighter mb-2 uppercase">Admin Access</h1>
                    <p className="text-gray-400 text-sm">Strictly authorized personnel only.</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                            placeholder="admin@scaleyourbusiness.in"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        formAction={login}
                        className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center group"
                    >
                        Secure Login
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                    <div className="text-center mt-6">
                        <a href="/" className="text-xs text-brand/80 hover:text-brand transition-colors underline decoration-brand/30 underline-offset-4">Return to Public Site</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
