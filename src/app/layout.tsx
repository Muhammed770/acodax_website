import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Acodax ERP",
  description: "Ultimate ERP Solution",
  openGraph: {
    title: 'Acodax ERP',
    description: 'Ultimate ERP Solution',
    url: 'https://acodax-website.vercel.app/',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://acodax-website.vercel.app/og.png',
        width: 3024,
        height: 1964,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="stylesheet" href="https://use.typekit.net/idl1zfi.css"></link>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
