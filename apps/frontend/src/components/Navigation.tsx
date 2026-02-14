const links = [
  { href: "/about", label: "클럽 소개" },
  { href: "/facilities", label: "시설 안내" },
  { href: "/lessons", label: "레슨 프로그램" },
  { href: "/reservation", label: "예약" },
  { href: "/contact", label: "오시는 길" },
];

export default function Navigation() {
  return (
    <nav style={{ display: "flex", gap: "1.5rem" }}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          style={{ textDecoration: "none", color: "#555", fontSize: "0.95rem" }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
