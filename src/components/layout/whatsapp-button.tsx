"use client"

import { usePathname } from "next/navigation"
import { motion } from "motion/react"

// We no longer need the explicit VISIBLE_PATHS list since we show it everywhere except admin.

export function WhatsAppButton() {
    const pathname = usePathname()

    // Show on all pages EXCEPT admin pages
    const isVisible = !pathname.startsWith("/admin")

    if (!isVisible) return null

    return (
        <motion.a
            href="https://wa.me/919990557753?text=Hi!%20I%20would%20like%20to%20get%20an%20instant%20quote%20%26%20book%20a%20free%20consultation%20meeting."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 group flex items-center justify-center bg-[#25D366] text-white border-[3px] border-black shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 rounded-none px-5 py-3 md:px-6 md:py-4 overflow-hidden"
        >
            <div className="absolute inset-0 bg-black scale-y-0 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-y-100 z-0"></div>

            <div className="relative z-10 flex items-center gap-3">
                <svg className="w-8 h-8 fill-current drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] group-hover:drop-shadow-none transition-all duration-500 text-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.656-1.482-1.466-1.656-1.764-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div className="flex flex-col text-left hidden md:flex">
                    <span className="text-[11px] font-black uppercase tracking-widest leading-none mb-0.5 opacity-90 transition-colors duration-500">Instant Quote</span>
                    <span className="text-sm font-black uppercase tracking-tight leading-none group-hover:text-[#3b82f6] transition-colors duration-500">Book Free Call</span>
                </div>
            </div>

            {/* Tooltip for Mobile so they still know what it is */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 font-black uppercase text-[10px] tracking-widest whitespace-nowrap opacity-0 md:hidden group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-[2px] border-black">
                Get Instant Quote
            </div>
        </motion.a>
    )
}
