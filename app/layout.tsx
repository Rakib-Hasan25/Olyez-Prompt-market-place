import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./(Providers)/NextUIProvider";

const inter = Inter({ subsets: ["latin"] });

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
      /* wrap childern with nextUi element */
      <Provider>
        {children}
      </Provider>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
