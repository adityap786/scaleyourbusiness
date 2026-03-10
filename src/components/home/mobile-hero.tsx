import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import heavy webgl to avoid SSR blocking
const Hyperspeed = dynamic(() => import("@/components/ui/Hyperspeed"), { ssr: false })

export const hyperspeedPresets = {
    one: {
        onSpeedUp: () => { },
        onSlowDown: () => { },
        distortion: 'turbulentDistortion',
        length: 400,
        roadWidth: 10,
        islandWidth: 2,
        lanesPerRoad: 3,
        fov: 90,
        fovSpeedUp: 150,
        speedUp: 2,
        carLightsFade: 0.4,
        totalSideLightSticks: 20,
        lightPairsPerRoadWay: 40,
        shoulderLinesWidthPercentage: 0.05,
        brokenLinesWidthPercentage: 0.1,
        brokenLinesLengthPercentage: 0.5,
        lightStickWidth: [0.12, 0.5],
        lightStickHeight: [1.3, 1.7],
        movingAwaySpeed: [60, 80],
        movingCloserSpeed: [-120, -160],
        carLightsLength: [400 * 0.03, 400 * 0.2],
        carLightsRadius: [0.05, 0.14],
        carWidthPercentage: [0.3, 0.5],
        carShiftX: [-0.8, 0.8],
        carFloorSeparation: [0, 5],
        colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0x131318,
            brokenLines: 0x131318,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3
        }
    }
}

export function MobileHero() {
    return (
        <section className="relative w-full h-[100svh] bg-black overflow-hidden flex flex-col justify-center items-center">
            {/* Hyperspeed WebGL Background */}
            <Hyperspeed effectOptions={hyperspeedPresets.one as any} />

            {/* Dark overlay to ensure text contrast against bright lasers */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-[1] pointer-events-none" />

            {/* Minimalist Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-12">
                <div className="inline-flex items-center gap-3 px-3 py-1.5 border-[1px] border-white/10 bg-white/5 backdrop-blur-sm rounded-full mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6] animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#3b82f6]">Scaling Infrastructure</span>
                </div>

                <h1 className="text-5xl font-black text-white tracking-tighter leading-[0.9] mb-6 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    SCALE YOUR<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic">BUSINESS.</span>
                </h1>

                <p className="text-base text-white/70 font-medium leading-relaxed max-w-[280px] mb-10">
                    Enterprise AI Automations, App Development, & Security.
                </p>

                <Link
                    href="#services"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-black text-sm uppercase tracking-widest rounded-none hover:bg-gray-200 active:scale-95 transition-all duration-300"
                >
                    Start Building
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>

            {/* Minimalist Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none opacity-60">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Explore Services</span>
                <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
            </div>
        </section>
    )
}
