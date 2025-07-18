import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anuj Solanki - Full-Stack Developer | AI Enthusiast",
  description: "Portfolio of Anuj Solanki, a B.Tech CSE-AI graduate and Full-Stack Developer specializing in AI, web development, and innovative solutions.",
  keywords: ["Anuj Solanki", "Full-Stack Developer", "AI Enthusiast", "Web Development", "Machine Learning", "React", "Python", "Portfolio"],
  authors: [{ name: "Anuj Solanki" }],
  creator: "Anuj Solanki",
  openGraph: {
    title: "Anuj Solanki - Full-Stack Developer | AI Enthusiast",
    description: "Portfolio of Anuj Solanki, a B.Tech CSE-AI graduate and Full-Stack Developer specializing in AI, web development, and innovative solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Solanki - Full-Stack Developer | AI Enthusiast",
    description: "Portfolio of Anuj Solanki, a B.Tech CSE-AI graduate and Full-Stack Developer specializing in AI, web development, and innovative solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
