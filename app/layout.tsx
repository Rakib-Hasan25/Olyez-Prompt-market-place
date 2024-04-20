import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "./(Providers)/NextUIProvider";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
//configure tailwind.config file for font-montserrat

export const metadata: Metadata = {
  title: "Prompt Store",
  description: "marketplace for prompt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${monserrat.className}`}>
        <Provider>
        {children}
      </Provider>
      
      </body>
    </html>
  );
}
