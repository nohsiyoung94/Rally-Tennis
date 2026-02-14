export default function ContactPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h1>오시는 길</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div>
          <h2>연락처</h2>
          <p>전화: 02-1234-5678</p>
          <p>이메일: info@rallytennis.co.kr</p>
          <h2>영업시간</h2>
          <p>평일: 06:00 - 22:00</p>
          <p>주말: 07:00 - 20:00</p>
          <p>공휴일: 08:00 - 18:00</p>
        </div>
        <div>
          <h2>주소</h2>
          <p>서울특별시 강남구 테니스로 123</p>
          <div
            style={{
              width: "100%",
              height: 300,
              backgroundColor: "#f0f0f0",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#999",
            }}
          >
            지도 영역 (API 연동 예정)
          </div>
        </div>
      </div>
    </div>
  );
}
