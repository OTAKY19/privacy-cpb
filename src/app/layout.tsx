import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Permis Bénin — Réussis ton code du premier coup",
  description:
    "Prépare-toi à l'examen du code de la route avec des quiz illimités, des examens blancs et un suivi de progression. Approuvé par les auto-écoles du Bénin.",
  openGraph: {
    title: "Code Permis Bénin",
    description: "Réussis ton code du premier coup.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
