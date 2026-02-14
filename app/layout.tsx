import type { Metadata } from "next";
import Script from "next/script";
import { ReduxProvider } from "@/lib/redux/provider";
import { inter, montserrat, lato } from "@/lib/fonts";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: "Wenny",
  description: "Beauty booking and business management, simplified.",
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
      <body className="min-h-screen w-full min-w-0 overflow-x-hidden bg-white font-inter antialiased">
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <ReduxProvider>
          <div className="min-h-screen w-full min-w-0 overflow-x-hidden">
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
