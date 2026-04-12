import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AUTOHOMO | AI Assistants for eCommerce Brands",
  description: "Boost your eCommerce sales and support with intelligent AI automation by AUTOHOMO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} antialiased selection:bg-brand-100 selection:text-brand-900 bg-background text-foreground flex flex-col min-h-screen`}>
        {children}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2026/02/22/20/20260222203414-JE4A5W5Y.json"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
