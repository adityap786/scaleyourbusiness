"use client"

import { useMDXComponent } from "next-contentlayer2/hooks"

interface MdxContentProps {
    code: string
}

export function MdxContent({ code }: MdxContentProps) {
    const Component = useMDXComponent(code)
    return <Component />
}
