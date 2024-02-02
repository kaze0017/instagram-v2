import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

import Header from "@/app/ui/header/Header";

export const metadata: Metadata = {
  title: "Instagram Clone",
  description: "Instagram Clone built with Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
