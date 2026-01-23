import type { Metadata } from "next";
import { ReduxProvider } from "@/lib/redux/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wenny - Next.js Template",
  description:
    "A modern Next.js template with Redux, RTK Query, Axios, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
