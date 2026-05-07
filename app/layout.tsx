import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceAI — Predict Late Payments Before They Happen",
  description: "AI predicts which invoices will be paid late. Analyze payment patterns, get confidence scores, and take action before cash flow suffers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="43bcee15-80ba-4b12-95c6-373e94d8e276"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
