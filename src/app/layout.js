import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ChatbaseWidget from "./widget";
import ThemeFromLogo from "@/components/ThemeFromLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bodayemo Inc. - Events, Ads, and Artiste Content",
  description: "Bodayemo Inc. is a leading entertainment company that specializes in creating unforgettable experiences. We are passionate about what we do and we are committed to providing our clients with the best possible service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeFromLogo />
        {children}
         <ChatbaseWidget />
      </body>
    </html>
  );
}
