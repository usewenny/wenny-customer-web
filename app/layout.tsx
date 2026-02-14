import type { Metadata } from "next";
import Script from "next/script";
import { ReduxProvider } from "@/lib/redux/provider";
import { inter, montserrat, lato } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wenny",
  description: "Beauty booking and business management, simplified.",
  icons: {
    icon: "/app-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = [inter.variable, montserrat.variable, lato.variable]
    .filter(Boolean)
    .join(" ");

  return (
    <html lang="en" className={fontVariables}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LVDS0XJNLJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LVDS0XJNLJ');
          `}
        </Script>
      </head>
      <body className="min-h-screen w-full min-w-0 overflow-x-hidden bg-white font-inter antialiased">
        <ReduxProvider>
          <div className="min-h-screen w-full min-w-0 overflow-x-hidden">
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
