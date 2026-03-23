import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPIK - Login",
  description: "Plataforma de habit stacking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${anton.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}