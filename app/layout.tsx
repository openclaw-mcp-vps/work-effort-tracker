import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Work Effort Tracker — Anonymous Workplace Productivity Reality Tracker",
  description: "Track actual work hours vs reported to understand real productivity patterns. Anonymous, private, and insightful."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="eb85afc1-c590-4de2-b62e-5d07ad82d083"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
