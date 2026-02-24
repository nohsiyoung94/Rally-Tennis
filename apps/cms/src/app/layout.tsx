import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "랠리테니스 CMS",
  description: "랠리테니스 관리자 시스템",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="m-0 font-sans text-text-primary bg-content-bg">
        {children}
      </body>
    </html>
  );
}
