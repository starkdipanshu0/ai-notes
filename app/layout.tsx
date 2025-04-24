

import { Geist } from "next/font/google";

import "./globals.css";

import Provider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "BrainBin Ai-Notes",
  description: "smart way to take notes",
  icons: {
    icon: "/OIP.jpeg",
  },
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  
  return (
    <ClerkProvider>
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Provider>{children}</Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
