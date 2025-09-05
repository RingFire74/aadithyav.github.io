import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aadithya Velayutham's Portfolio",
  description: "The professional portfolio of Aadithya Velayutham, a software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
