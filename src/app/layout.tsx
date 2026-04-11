import type { Metadata } from "next";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs"


export const metadata: Metadata = {
  title: "Manager Stock",
  description: "Desarrollado por Walver Rodriguez",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
  
  
