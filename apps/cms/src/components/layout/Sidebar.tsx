"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/mock";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  const sections = navItems.reduce<Record<string, typeof navItems>>((acc, item) => {
    const section = item.section || "기타";
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {});

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-sidebar text-white flex flex-col transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Logo */}
        <div className="px-6 py-5 border-b border-white/10">
          <Link href="/" className="text-lg font-bold text-white no-underline flex items-center gap-2">
            <span className="text-2xl">🎾</span>
            <span>랠리테니스 관리자 페이지</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {Object.entries(sections).map(([section, items]) => (
            <div key={section} className="mb-4">
              <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                {section}
              </p>
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm no-underline transition-colors mb-0.5 ${isActive(item.href)
                    ? "bg-accent text-white font-medium"
                    : "text-white/70 hover:bg-sidebar-hover hover:text-white"
                    }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-white/10">
          <Link
            href="/login"
            className="flex items-center gap-2 px-3 py-2 text-sm text-white/50 hover:text-white no-underline transition-colors"
          >
            <span>🚪</span>
            <span>로그아웃</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
