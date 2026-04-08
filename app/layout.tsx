import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inteliabyte — Tecnología, Automatización e IA Enterprise",
  description: "Transformamos operaciones empresariales con IA aplicada, automatización inteligente y ciberseguridad enterprise.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
