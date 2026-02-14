export default function LessonsPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h1>레슨 프로그램</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
        {programs.map((p) => (
          <div key={p.title} style={{ border: "1px solid #e0e0e0", borderRadius: 8, padding: "1.5rem" }}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p style={{ fontWeight: "bold" }}>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const programs = [
  { title: "입문반", description: "테니스를 처음 시작하는 분을 위한 기초 과정", price: "월 200,000원" },
  { title: "초급반", description: "기본기를 다지고 랠리를 배우는 과정", price: "월 250,000원" },
  { title: "중급반", description: "경기 전략과 기술 향상 과정", price: "월 300,000원" },
  { title: "개인 레슨", description: "1:1 맞춤형 집중 레슨", price: "회당 80,000원" },
];
