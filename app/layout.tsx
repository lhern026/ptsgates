import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { productionUrl } from "@/config/seo";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { GoogleReCaptchaProvider } from "../node_modules/react-google-recaptcha-v3";

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  alternates: { canonical: productionUrl + "/" },
  title: {
    default: "Parking Technical Services | Southern California",
    template: `%s - ${siteConfig.name}`,
  },
  description: "Parking revenue control and building access control equipment, installation, and service from Riverside-based Parking Technical Services, serving Southern California.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-white text-gray-900 font-sans antialiased bg-cover bg-center",
          fontSans.variable
        )}
      >
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />

          <main className="site-content flex-grow container mx-auto max-w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
