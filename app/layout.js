import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider, SignIn } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Formify",
  description: "Generate forms on the go",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
    <html lang="en" >
      <body className={inter.className}>
        <Header/>
       
        {children}
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
