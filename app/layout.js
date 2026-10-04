import { DM_Sans } from "next/font/google"
import Header from "../components/Header/Header"
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
                <Header />
                {children}
            </body>
        </html>
    )
}