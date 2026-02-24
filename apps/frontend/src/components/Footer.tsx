import Link from "next/link";
import Image from "next/image";
import type { MenuItem } from "@/types";

const footerLinks: MenuItem[] = [
  { href: "/about", label: "아카데미 소개" },
  { href: "/lessons", label: "레슨 프로그램" },
  { href: "/coaches", label: "코치 소개" },
  { href: "/facilities", label: "시설안내" },
  { href: "/contact", label: "상담문의" },
  { href: "/location", label: "위치안내" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2419] text-gray-400 pt-16 pb-8 px-6 text-sm">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/흰배경.png"
                alt="랠리테니스 로고"
                width={128}
                height={44}
                className="object-contain w-auto h-auto"
              />
            </div>
            <p className="leading-7 text-gray-500">
              프리미엄 테니스 아카데미<br />
              체계적인 레슨과 최고의 시설
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Contact
            </h4>
            <p className="leading-7 text-gray-500">
              Tel. 02-1234-5678<br />
              Email. info@rallytennis.co.kr<br />
              카카오톡. @랠리테니스
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Hours
            </h4>
            <p className="leading-7 text-gray-500">
              평일 06:00 - 22:00<br />
              토요일 07:00 - 20:00<br />
              일/공휴일 08:00 - 18:00
            </p>
          </div>
        </div>

        {/* Business Info */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p className="text-gray-600 text-xs leading-6">
            상호: 랠리테니스 아카데미 | 대표: 조용규 | 사업자등록번호: 111-12-71808<br />
            주소: 경기도 용인시 수지구 고기로 163, 2층(동천동, 헤이젠빌딩) | 이메일: info@rallytennis.co.kr
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Rally Tennis Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
