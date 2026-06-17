import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rainbow Ski Area – Ticket Office Induction",
  description: "Ticket Office Induction for Rainbow Ski Area volunteers and staff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="h-1.5 w-full" style={{ background: 'linear-gradient(to right, #1a2f5e 20%, #00b4d8 35%, #4caf50 55%, #e53935 75%, #ffd600 100%)' }} />
        {children}
      </body>
    </html>
  );
}
