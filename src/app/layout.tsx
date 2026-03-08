import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      </body>
    </html>
  );
}
