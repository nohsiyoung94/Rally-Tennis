import Navigation from "./Navigation";

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e0e0e0",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a href="/" style={{ textDecoration: "none", color: "#111", fontSize: "1.5rem", fontWeight: "bold" }}>
        랠리테니스
      </a>
      <Navigation />
    </header>
  );
}
