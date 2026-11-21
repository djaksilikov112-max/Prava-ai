import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRAVA AI — Haydovchilikni ishonch bilan o‘rganing",
  description: "O‘zbekiston uchun AI yordamidagi haydovchilik nazariyasi va amaliy mashg‘ulot platformasi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
