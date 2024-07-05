import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const chakra_petch = Chakra_Petch({
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "TopCount",
  description: "Count",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chakra_petch.className}>
        {children}
        <Footer />  
        </body>
    </html>
  );
}
