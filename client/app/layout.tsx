import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "Caramelito Acido",
  description: "LAM de Alta Gracia, programa de streamming local con info local, nacional e internacional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
