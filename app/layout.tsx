import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppHeader from '@/components/AppHeader';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home Service Hub",
  description: "Manage your Projects!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black" data-theme='forest'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
