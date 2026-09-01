import { SpeedInsights } from "@vercel/speed-insights/next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Machine Learning & Product Portfolio",
  description:
    "Selected product, machine-learning, and software-engineering case studies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${ovo.variable} antialiased`}>
        {process.env.VERCEL ? <SpeedInsights /> : null}
        {children}
      </body>
    </html>
  );
}
