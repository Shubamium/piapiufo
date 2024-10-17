import type { Metadata } from "next";
import { Londrina_Solid } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";

const londrinaSolid = Londrina_Solid({
  weight: ["100", "300", "400", "900"],
  subsets: ["latin"],
});

const title = "PiapiUfo";

const description = "";
const banner = "";
const url = "https://piapiufo.vercel.app";

export const metadata: Metadata = {
  title: title,

  metadataBase: new URL(url),

  openGraph: {
    url: url,
    title: title,
    description: description,
    authors: "shubamium",
    images: [banner],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [banner],
  },
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={
          { "--fontMain": londrinaSolid.style.fontFamily } as CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
