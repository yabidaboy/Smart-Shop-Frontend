import type { Metadata } from "next";
import { Urbanist } from 'next/font/google'
import "./globals.css";
import Header from "./_components/Header";
import StoreProvider from "@/redux/StoreProvider";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./_components/Footer";
export const metadata: Metadata = {
  title: "Smart Shop",
  description: "The Wright Place To Find What You Need",
};
const urbaniste = Urbanist({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={urbaniste.className}
        >
          <StoreProvider>
            <Header/>
            {children}
            <Toaster/>
            <Footer/>
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
