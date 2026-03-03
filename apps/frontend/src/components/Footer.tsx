import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-600 pt-6 pb-4 px-6 text-xs">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-white.png"
              alt="랠리테니스 로고"
              width={90}
              height={30}
              className="object-contain h-auto"
            />
            <p className="leading-5 text-gray-500">
              프리미엄 테니스 아카데미<br />
              체계적인 레슨과 최고의 시설
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-pink-400 text-[10px] font-semibold tracking-[0.15em] uppercase mb-1">
              Contact
            </h4>
            <p className="leading-5 text-gray-500">
              Tel. 0507-1442-2092<br />
              Email. cho0614@naver.com
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-pink-400 text-[10px] font-semibold tracking-[0.15em] uppercase mb-1">
              Hours
            </h4>
            <p className="leading-5 text-gray-500">
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
    </footer>
  );
}
