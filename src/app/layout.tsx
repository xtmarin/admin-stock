import type { Metadata } from "next";
import "./globals.css"
import {ClerkProvider} from "@clerk/nextjs"


export const metadata: Metadata = {
  title: "Manager Stock",
  description: "Desarrollado por Walver Rodriguez",
};


export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  const { children } = props;


  return (
    <ClerkProvider>
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
    </ClerkProvider>
  );
}
