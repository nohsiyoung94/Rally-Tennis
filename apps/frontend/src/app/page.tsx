export default function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        랠리테니스에 오신 것을 환영합니다
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: 600, margin: "0 auto" }}>
        최고의 시설과 전문 코칭으로 테니스의 즐거움을 경험하세요.
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "3rem", flexWrap: "wrap" }}>
        <a href="/about" style={cardStyle}>
          <h3>클럽 소개</h3>
          <p>랠리테니스 클럽을 소개합니다</p>
        </a>
        <a href="/facilities" style={cardStyle}>
          <h3>시설 안내</h3>
          <p>코트 및 부대시설을 확인하세요</p>
        </a>
        <a href="/lessons" style={cardStyle}>
          <h3>레슨 프로그램</h3>
          <p>수준별 맞춤 레슨 안내</p>
        </a>
        <a href="/reservation" style={cardStyle}>
          <h3>예약하기</h3>
          <p>코트 및 레슨을 예약하세요</p>
        </a>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  display: "block",
  padding: "2rem",
  border: "1px solid #e0e0e0",
  borderRadius: 12,
  textDecoration: "none",
  color: "#333",
  width: 220,
  transition: "box-shadow 0.2s",
};
