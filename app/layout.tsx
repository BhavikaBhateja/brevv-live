import "./globals.css";
import "../styles/variables.css";
import "../styles/animations.css";
import "../styles/site.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brevv - Transform Learning Into Measurable Success",
  description:
    "Empower learners, educators, and organizations with a modern learning platform designed for engagement, performance, and growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-800 font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
