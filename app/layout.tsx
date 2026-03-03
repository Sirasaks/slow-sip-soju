import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Slow Sip Soju | Less Alcohol, More Moments",
  description: "Experience the art of smooth drinking with Slow Sip Soju. Low alcohol, natural flavors, premium moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
