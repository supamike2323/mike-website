import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@/components/Analytics';

export const metadata: Metadata = {
  title: "Mike Deng",
  description: "Personal website and portfolio",
  keywords: ["Mike Deng", "portfolio", "developer", "engineer"],
  authors: [{ name: "Mike Deng" }],
  openGraph: {
    title: "Mike Deng",
    description: "Personal website and portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased bg-black text-white transition-colors duration-300 relative"
        style={{ fontFamily: 'VT323, monospace' }}
      >
        {/* Content */}
        <div className="relative min-h-screen flex flex-col">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
