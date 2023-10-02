import { Hanken_Grotesk } from "next/font/google"
import localFont from "next/font/local"

const hanken = Hanken_Grotesk({ subsets: ["latin"] })
const basement = localFont({ src: "./BasementGrotesque-Black_v1.202.otf" })
const reenie = localFont({ src: "./ReenieBeanie-Regular.ttf" })

export { hanken, basement, reenie }
