import type { Metadata } from "next";

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
      <body style={{ margin: 0, fontFamily: "'Noto Sans KR', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
