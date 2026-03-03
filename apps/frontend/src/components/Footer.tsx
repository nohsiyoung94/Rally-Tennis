import Link from "next/link";
import Image from "next/image";

const menuLinks = [
  { href: "/about", label: "아카데미 소개" },
  { href: "/lessons", label: "레슨 프로그램" },
  { href: "/coaches", label: "코치 소개" },
  { href: "/facilities", label: "시설안내" },
  { href: "/location", label: "위치안내" },
  { href: "/contact", label: "상담문의" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-600">
      {/* ── 모바일 전용 (sm 미만) ── */}
      <div className="sm:hidden px-5 pt-5 pb-4">
        {/* 로고 + 슬로건 */}
        <div className="flex items-center gap-2 mb-3">
          <Image
            src="/images/logo/logo-white.png"
            alt="랠리테니스 로고"
            width={70}
            height={24}
            className="object-contain h-auto"
          />
          <p className="text-[10px] text-gray-500 leading-4">
            프리미엄 테니스 아카데미
          </p>
        </div>

        {/* 메뉴 링크 */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3 text-[10px]">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-500 hover:text-pink-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* 연락처 + 운영시간 가로 배치 */}
        <div className="grid grid-cols-2 gap-3 mb-3 text-[10px] text-gray-500">
          <div>
            <p className="text-pink-400 font-semibold mb-0.5">CONTACT</p>
            <p className="leading-4">
              Tel. 0507-1442-2092<br />
              cho0614@naver.com
            </p>
          </div>
          <div>
            <p className="text-pink-400 font-semibold mb-0.5">HOURS</p>
            <p className="leading-4">
              평일 06:30 - 22:00<br />
              주말 08:00 - 18:00
            </p>
          </div>
        </div>

        {/* 사업자 정보 + Copyright */}
        <div className="border-t border-gray-400/30 pt-2 text-[9px] text-gray-400 leading-4">
          <p>랠리테니스 아카데미 | 대표: 조용규 | 사업자등록번호: 111-12-71808</p>
          <p>경기도 용인시 수지구 고기로 163, 2층(동천동, 헤이젠빌딩)</p>
          <p className="mt-1 text-center">&copy; {new Date().getFullYear()} Rally Tennis Academy.</p>
        </div>
      </div>

      {/* ── 데스크탑 (sm 이상) ── */}
      <div className="hidden sm:block px-6 pt-6 pb-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-4 gap-4 mb-4">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo-white.png"
                alt="랠리테니스 로고"
                width={90}
                height={30}
                className="object-contain h-auto"
              />
              <p className="leading-5 text-gray-500 text-xs">
                프리미엄 테니스 아카데미<br />
                체계적인 레슨과 최고의 시설
              </p>
            </div>

            {/* Menu */}
            <div>
              <h4 className="text-pink-400 text-[10px] font-semibold tracking-[0.15em] uppercase mb-1">
                Menu
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs">
                {menuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-500 hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-pink-400 text-[10px] font-semibold tracking-[0.15em] uppercase mb-1">
                Contact
              </h4>
              <p className="leading-5 text-gray-500 text-xs">
                Tel. 0507-1442-2092<br />
                Email. cho0614@naver.com
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-pink-400 text-[10px] font-semibold tracking-[0.15em] uppercase mb-1">
                Hours
              </h4>
              <p className="leading-5 text-gray-500 text-xs">
                평일 06:30 - 22:00 | 주말 08:00 - 18:00<br />
                공휴일 별도 안내
              </p>
            </div>
          </div>

          {/* Business Info + Copyright */}
          <div className="border-t border-gray-200 pt-3 text-gray-500 text-[10px] leading-5">
            <p>
              상호: 랠리테니스 아카데미 | 대표: 조용규 | 사업자등록번호: 111-12-71808 | 주소: 경기도 용인시 수지구 고기로 163, 2층(동천동, 헤이젠빌딩)
            </p>
            <p className="mt-1 text-center">
              &copy; {new Date().getFullYear()} Rally Tennis Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
