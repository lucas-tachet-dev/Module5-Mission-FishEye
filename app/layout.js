import { DM_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/images/logo.png"
import "./globals.css"

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans"
})

export const metadata = {
    title: "FishEye"
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={dmSans.variable}>
                <header>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Fisheye Home page"
                            height={50}
                            width={200}
                            loading="eager"
                        />
                    </Link>
                    <h1>Nos photographes</h1>
                </header>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}