import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteNav } from "@/components/layout/SiteNav";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BootSequence } from "@/components/xr/BootSequence";
import { GazeReticle } from "@/components/xr/GazeReticle";
import { GameTracker } from "@/lib/game/GameProvider";
import { GameHUD } from "@/components/game/GameHUD";
import { GameToasts } from "@/components/game/GameToasts";
import { LevelUpOverlay } from "@/components/game/LevelUpOverlay";
import { themeInitScript } from "@/lib/themeScript";
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
      // The pre-paint script sets data-theme before React hydrates
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <noscript>
          <style>{".boot-screen{display:none!important}"}</style>
        </noscript>
        <MotionProvider>
          <BootSequence />
          <GazeReticle />
          <ScrollProgress />
          <SkipToContent />
          <SiteNav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <GameTracker />
          <GameHUD />
          <GameToasts />
          <LevelUpOverlay />
        </MotionProvider>
      </body>
    </html>
  );
}
