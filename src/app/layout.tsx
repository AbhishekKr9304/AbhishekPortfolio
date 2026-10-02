import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SoundProvider } from "@/lib/sound/SoundProvider";
import { SiteNav } from "@/components/layout/SiteNav";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Kumar — XR Developer",
  description:
    "Abhishek Kumar is an XR Developer building immersive AR, VR, MR and spatial computing experiences for industrial training and real-time 3D interaction.",
  openGraph: {
    title: "Abhishek Kumar — XR Developer",
    description:
      "Immersive AR, VR, MR and spatial computing experiences for industrial training and real-time 3D interaction.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SoundProvider>
          <SkipToContent />
          <SiteNav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SoundProvider>
      </body>
    </html>
  );
}
