export default function FacilitiesPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h1>시설 안내</h1>
      <h2>코트 현황</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
        {courts.map((court) => (
          <div key={court.name} style={{ border: "1px solid #e0e0e0", borderRadius: 8, padding: "1.5rem" }}>
            <h3>{court.name}</h3>
            <p>종류: {court.type}</p>
            <p>상태: {court.status}</p>
          </div>
        ))}
      </div>
      <h2 style={{ marginTop: "2rem" }}>부대시설</h2>
      <ul>
        <li>샤워실 및 탈의실</li>
        <li>휴게 라운지</li>
        <li>주차장</li>
        <li>프로샵</li>
      </ul>
    </div>
  );
}

const courts = [
  { name: "A코트", type: "하드코트", status: "운영중" },
  { name: "B코트", type: "하드코트", status: "운영중" },
  { name: "C코트", type: "클레이코트", status: "운영중" },
  { name: "D코트", type: "실내코트", status: "운영중" },
];
