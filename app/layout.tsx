import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRA Editions",
  description: "Des mots qui éveillent. Des œuvres qui résonnent. Des esprits qui s'élèvent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
