"use client"

import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname();

    const isHomePage = pathname === "/"

    return (
        <header>
            <Link href="/">
                <Image
                    src="/images/logo.png"
                    alt="Fisheye Home page"
                    height={50}
                    width={200}
                    loading="eager"
                />
            </Link>
            {isHomePage && (
                <h1>Nos photographes</h1>
            )}
        </header>
    )
}