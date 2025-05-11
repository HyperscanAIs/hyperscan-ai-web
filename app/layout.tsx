import { ThemeProvider } from "@/components/theme-provider";
import { WalletProviderWrapper } from "@/components/wallet-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyperscan AI - Web3 AI Platform",
  description: "The future of AI-powered Web3 applications",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} dark:bg-background dark:text-foreground min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <WalletProviderWrapper>{children}</WalletProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
