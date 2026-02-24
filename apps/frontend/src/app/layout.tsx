import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "랠리테니스 아카데미 | Rally Tennis Academy",
  description: "프리미엄 테니스 아카데미 - 체계적인 레슨과 최고의 시설에서 테니스를 경험하세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="m-0 font-sans text-gray-800">
        <Header />
        <main className="pt-40">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
