"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  { href: "/about", label: "아카데미 소개" },
  { href: "/lessons", label: "레슨 프로그램" },
  { href: "/coaches", label: "코치 소개" },
  { href: "/facilities", label: "시설안내" },
  { href: "/contact", label: "상담문의" },
  { href: "/location", label: "위치안내" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const headerBg = scrolled || !isHome
    ? "bg-primary/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/images/logo/흰배경.png"
            alt="랠리테니스 로고"
            width={144}
            height={48}
            className="object-contain h-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-white/80 text-sm font-medium px-4 py-2 transition-colors hover:text-accent nav-link-hover"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 border border-accent text-accent text-sm px-5 py-2 rounded-sm hover:bg-accent hover:text-primary transition-all duration-300 font-medium"
          >
            상담문의
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-primary shadow-2xl transform transition-transform duration-300 md:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white text-2xl bg-transparent border-none cursor-pointer"
            aria-label="메뉴 닫기"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col px-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/80 py-4 border-b border-white/10 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
