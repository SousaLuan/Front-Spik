import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

// Configuração da fonte Inter para textos comuns
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configuração da fonte Anton para o logo e o fundo "magazine"
const anton = Anton({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-anton" 
});

export const metadata: Metadata = {
  title: "SPIK - Login",
  description: "Plataforma de alta performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${anton.variable} antialiased`} 
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}