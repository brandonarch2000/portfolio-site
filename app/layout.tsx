import "./globals.css";
// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon Archibald Portfolio",
  description: "Computer Science Graduate Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <nav>
            <a href="/">Home</a> | <a href="#skills">Skills</a> | <a href="#education">Education</a> | <a href="#experience">Experience</a> | <a href="#contact">Contact</a>
          </nav>
        </header>
        {children}
        <footer className="footer">© 2026 Brandon Archibald</footer>
      </body>
    </html>
  );
}
