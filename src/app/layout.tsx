import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Mega Ecomm — Complete eCommerce Management Platform",
    template: "%s | Mega Ecomm",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "eCommerce Management Platform",
    "Omnichannel Inventory Sync",
    "Order Management System",
    "Product Information Management",
    "Commerce Automation",
    "Customer 360",
    "eCommerce Analytics",
    "Shopify Integration",
    "Amazon SP-API",
  ],
  authors: [{ name: "Mega Ecomm Team" }],
  creator: "Mega Ecomm",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: "Mega Ecomm — Complete eCommerce Management Platform",
    description: SITE_CONFIG.description,
    siteName: "Mega Ecomm",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega Ecomm — Complete eCommerce Management Platform",
    description: SITE_CONFIG.description,
    creator: "@megaecomm",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col font-sans bg-white text-slate-900 subpixel-antialiased selection:bg-[#735ae5] selection:text-white"
      >
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
