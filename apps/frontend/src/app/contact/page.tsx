import type { ContactInfo } from "@/types";

const subInfo: ContactInfo[] = [
  { title: "이메일", value: "info@rallytennis.co.kr" },
  { title: "주소", value: "서울특별시 강남구 테니스로 123" },
];

export default function ContactPage() {
  return (
    <div>
      {/* 히어로 배너 */}
      <div className="relative py-20 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560012057-4372e14c5085?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10">
          <p className="text-pink-400 text-xs tracking-[0.2em] uppercase mb-2">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            상담문의
          </h1>
          <div className="w-12 h-[2px] bg-pink-300 mx-auto mt-4" />
        </div>
      </div>

      {/* 메인 영역 */}
      <div className="max-w-[900px] mx-auto py-16 px-6">
        <p className="text-center text-gray-600 mb-10 text-base">
          레슨 상담 및 문의는 전화로 편하게 연락해주세요.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* 왼쪽 - 전화 상담 */}
          <div className="flex flex-col items-center justify-center gap-4 p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-800">전화 상담</h2>
            <p className="text-2xl font-bold text-primary">0507-1442-2092</p>
            <a
              href="tel:0507-1442-2092"
              className="inline-block w-full text-center bg-accent text-primary font-bold py-3 rounded-lg hover:bg-accent-light transition-colors"
            >
              전화하기
            </a>
          </div>

          {/* 오른쪽 - 보조 정보 */}
          <div className="flex flex-col justify-center gap-4 p-8 bg-primary-bg rounded-xl border-l-4 border-pink-400">
            <div>
              <h3 className="font-semibold text-primary text-sm mb-2">상담 가능 시간</h3>
              <p className="text-gray-600 text-sm leading-7">
                평일 06:30 - 22:00<br />
                주말 08:00 - 18:00<br />
                공휴일 별도 안내
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary text-sm mb-2">이메일</h3>
              <p className="text-gray-600 text-sm">cho0614@naver.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary text-sm mb-2">주소</h3>
              <p className="text-gray-600 text-sm">경기도 용인시 수지구 고기로 163,2층<br />(동천동, 헤이젠빌딩)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
