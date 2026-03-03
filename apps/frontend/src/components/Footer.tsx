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
    <footer className="bg-gray-300 text-gray-600 px-5 sm:px-8 pt-5 pb-4">
      <div className="max-w-[1200px] mx-auto">

        {/* 로고 + 슬로건 */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3">
          <Image
            src="/images/logo/logo-white.png"
            alt="랠리테니스 로고"
            width={100}
            height={34}
            className="object-contain h-auto w-[70px] sm:w-[100px]"
          />
          <p className="text-[10px] sm:text-xs text-gray-500 leading-4">
            프리미엄 테니스 아카데미
          </p>
        </div>

        {/* 메뉴 링크 */}
        <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 mb-3 text-[10px] sm:text-xs">
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

        {/* 연락처 + 운영시간 */}
        <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-10 mb-3 text-[10px] sm:text-xs text-gray-500">
          <div>
            <p className="text-pink-400 font-semibold mb-0.5">CONTACT</p>
            {/* 모바일: 줄바꿈 / PC: 한 줄 */}
            <p className="leading-4 sm:leading-5">
              <span>Tel. 0507-1442-2092</span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> | Email. </span>
              <span className="sm:hidden"><br /></span>
              <span>cho0614@naver.com</span>
            </p>
          </div>
          <div>
            <p className="text-pink-400 font-semibold mb-0.5">HOURS</p>
            <p className="leading-4 sm:leading-5">
              <span>평일 06:30 - 22:00</span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> | </span>
              <span>주말 08:00 - 18:00</span>
              <span className="hidden sm:inline"> | 공휴일 별도 안내</span>
            </p>
          </div>
        </div>

        {/* 사업자 정보 + Copyright */}
        <div className="border-t border-gray-400/30 pt-2 text-[9px] sm:text-[10px] text-gray-400 leading-4 sm:leading-5">
          <p>랠리테니스 아카데미 | 대표: 조용규 | 사업자등록번호: 111-12-71808</p>
          <p>경기도 용인시 수지구 고기로 163, 2층(동천동, 헤이젠빌딩)</p>
          <p className="mt-1 text-center">&copy; {new Date().getFullYear()} Rally Tennis Academy. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
