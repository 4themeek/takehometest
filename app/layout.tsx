import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TakeHomeTest.com — Premium Domain, Offers Invited",
  description:
    "TakeHomeTest.com — the category-defining domain for direct-to-consumer diagnostics. A single, exact-match name for the at-home testing market. Offers invited.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
