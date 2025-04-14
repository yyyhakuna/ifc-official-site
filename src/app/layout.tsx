import type { Metadata } from "next";
import { Geist, Ubuntu } from "next/font/google";
import "./globals.css";
import Provider from "./components/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const ubuntu = Ubuntu({
  variable: "--font-ubnutu",
  subsets: ["latin"],
  weight: ["400", "700", "500", "300"],
});

export const metadata: Metadata = {
  title: "IFC",
  description: "IFC Official Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} 
        ${ubuntu.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
