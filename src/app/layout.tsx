import type { Metadata } from "next";
import { Londrina_Solid } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./components/header/Header";

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
        <div className="bg-star dc"></div>
        <div className="bg-gradient dc"></div>
        <img src="de/rainbow.png" className="decor_horizon-rainbow dc"></img>
        <img src="de/bg-planet-bt.png" className="decor_planet-bt dc"></img>
        <img src="de/bg-planet-t.png" className="decor_planet-t dc"></img>
        <Header />
        {children}
      </body>
    </html>
  );
}
