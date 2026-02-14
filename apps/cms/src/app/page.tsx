import Link from "next/link";

export default function DashboardPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: 240,
          backgroundColor: "#1e293b",
          color: "#fff",
          padding: "2rem 1rem",
        }}
      >
        <h2 style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>랠리테니스 CMS</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Link href="/" style={navLinkStyle}>대시보드</Link>
          <Link href="#" style={navLinkStyle}>콘텐츠 관리</Link>
          <Link href="#" style={navLinkStyle}>예약 관리</Link>
          <Link href="#" style={navLinkStyle}>회원 관리</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "2rem" }}>
        <h1>대시보드</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "2rem" }}>
          <div style={statCard}>
            <h3>오늘 예약</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>12</p>
          </div>
          <div style={statCard}>
            <h3>총 회원수</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>158</p>
          </div>
          <div style={statCard}>
            <h3>이번 달 매출</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>₩4,200,000</p>
          </div>
        </div>
      </main>
    </div>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: "#94a3b8",
  textDecoration: "none",
  padding: "0.5rem",
  borderRadius: 6,
};

const statCard: React.CSSProperties = {
  border: "1px solid #e0e0e0",
  borderRadius: 8,
  padding: "1.5rem",
  textAlign: "center",
};
