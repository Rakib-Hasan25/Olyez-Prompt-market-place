import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "./(Providers)/NextUIProvider";
import { Toaster } from "react-hot-toast";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} ${monserrat.className}`}>
          <Provider>
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            {children}
            </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
