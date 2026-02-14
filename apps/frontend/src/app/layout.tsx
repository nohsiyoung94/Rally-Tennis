import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "랠리테니스",
  description: "랠리테니스 클럽 홈페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, fontFamily: "'Noto Sans KR', sans-serif" }}>
        <Header />
        <main style={{ minHeight: "calc(100vh - 160px)", padding: "2rem" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
