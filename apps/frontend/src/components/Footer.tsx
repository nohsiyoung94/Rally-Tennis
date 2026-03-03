import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-600 pt-10 pb-6 px-6 text-sm">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/logo-white.png"
                alt="랠리테니스 로고"
                width={128}
                height={44}
                className="object-contain h-auto"
              />
            </div>
            <p className="leading-7 text-gray-500">
              프리미엄 테니스 아카데미<br />
              체계적인 레슨과 최고의 시설
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-pink-400 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Contact
            </h4>
            <p className="leading-7 text-gray-500">
              Tel. 0507-1442-2092<br />
              Email. cho0614@naver.com<br />
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-pink-400 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Hours
            </h4>
            <p className="leading-7 text-gray-500">
              평일 06:30 - 22:00<br />
              주말 08:00 - 18:00<br />
              공휴일 별도 안내
            </p>
          </div>
        </div>

        {/* Business Info */}
        <div className="border-t border-gray-200 pt-8 mb-6">
          <p className="text-gray-500 text-xs leading-6">
            상호: 랠리테니스 아카데미 | 대표: 조용규 | 사업자등록번호: 111-12-71808<br />
            주소: 경기도 용인시 수지구 고기로 163, 2층(동천동, 헤이젠빌딩) | 이메일: cho0614@naver.com
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Rally Tennis Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
