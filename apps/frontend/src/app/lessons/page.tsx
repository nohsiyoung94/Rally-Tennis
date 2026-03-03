import Image from "next/image";

export default function LessonsPage() {
  return (
    <div>
      <div className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10">
          <p className="text-pink-400 text-xs tracking-[0.2em] uppercase mb-2">Programs</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">레슨 프로그램</h1>
          <div className="w-12 h-[2px] bg-pink-300 mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-[850px] mx-auto py-16 px-6">
        {/* Container looking like the tablet reference poster */}
        <div className="relative bg-white border-[12px] border-primary-bg rounded-2xl p-6 md:p-12 shadow-sm overflow-hidden">
          {/* Background logo watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/images/logo/logo-white.png"
              alt=""
              width={800}
              height={800}
              className="!w-[500px] md:!w-[600px] h-auto opacity-10 select-none"
            />
          </div>

          {/* Header area */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-end mb-3 border-b-2 border-primary pb-3 gap-4">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <Image
                src="/images/logo/logo-white.png"
                alt="랠리테니스 로고"
                width={360}
                height={120}
                className="object-contain w-auto h-[133px] md:h-[159px]"
              />
              <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">RALLY TENNIS</h2>
              <p className="text-pink-600 font-semibold tracking-widest text-sm md:text-base">PROGRAM</p>
            </div>
            <p className="text-sm font-medium text-gray-500 whitespace-nowrap shrink-0">
              * 카드 결제시 부가세(VAT)는 별도입니다.
            </p>
          </div>

          <div className="relative z-10 space-y-3">

            {/* 평일 레슨 4주 프로그램 */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 bg-pink-300 rounded-sm inline-block"></span>
                평일 레슨 4주 프로그램
              </h3>
              <div className="overflow-hidden rounded border border-gray-200">
                <table className="w-full text-center text-sm md:text-base">
                  <thead>
                    <tr className="bg-primary-bg border-b border-gray-200">
                      <th className="py-3 md:py-4 px-2 font-semibold text-gray-500 w-[20%] bg-gray-50 border-r border-gray-200">구분</th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary border-r border-gray-200">
                        주 1회 <span className="inline-block px-1.5 py-0.5 bg-pink-300 text-rose-800 font-bold text-[10px] md:text-[11px] rounded ml-1 tracking-wider whitespace-nowrap">월 4회</span>
                      </th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary border-r border-gray-200">
                        주 2회 <span className="inline-block px-1.5 py-0.5 bg-pink-300 text-rose-800 font-bold text-[10px] md:text-[11px] rounded ml-1 tracking-wider whitespace-nowrap">월 8회</span>
                      </th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary">
                        주 3회 <span className="inline-block px-1.5 py-0.5 bg-pink-300 text-rose-800 font-bold text-[10px] md:text-[11px] rounded ml-1 tracking-wider whitespace-nowrap">월 12회</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-primary-bg/20 transition-colors">
                      <td className="py-3 md:py-4 font-semibold text-primary bg-gray-50 border-r border-gray-200">1:1</td>
                      <td className="py-3 md:py-4 border-r border-gray-200">200,000원</td>
                      <td className="py-3 md:py-4 border-r border-gray-200">310,000원</td>
                      <td className="py-3 md:py-4">410,000원</td>
                    </tr>
                    <tr className="hover:bg-primary-bg/20 transition-colors">
                      <td className="py-3 md:py-4 font-semibold text-primary bg-gray-50 border-r border-gray-200">2:1</td>
                      <td className="py-3 md:py-4 border-r border-gray-200">140,000원</td>
                      <td className="py-3 md:py-4 border-r border-gray-200">220,000원</td>
                      <td className="py-3 md:py-4">300,000원</td>
                    </tr>
                    <tr className="hover:bg-primary-bg/20 transition-colors">
                      <td className="py-3 md:py-4 font-semibold text-primary bg-gray-50 border-r border-gray-200">3:1</td>
                      <td className="py-3 md:py-4 border-r border-gray-200">120,000원</td>
                      <td className="py-3 md:py-4 border-r border-gray-200">180,000원</td>
                      <td className="py-3 md:py-4">260,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 주말 레슨 4주 프로그램 */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 bg-pink-300 rounded-sm inline-block"></span>
                주말 레슨 4주 프로그램
              </h3>
              <div className="overflow-hidden rounded border border-gray-200">
                <table className="w-full text-center text-sm md:text-base">
                  <thead>
                    <tr className="bg-primary-bg border-b border-gray-200">
                      <th className="py-3 md:py-4 px-2 font-semibold text-gray-500 w-[20%] bg-gray-50 border-r border-gray-200">구분</th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary border-r border-gray-200 w-[40%]">
                        주 1회 <span className="inline-block px-1.5 py-0.5 bg-pink-300 text-rose-800 font-bold text-[10px] md:text-[11px] rounded ml-1 tracking-wider whitespace-nowrap">월 4회</span>
                      </th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary w-[40%]">
                        주 2회 <span className="inline-block px-1.5 py-0.5 bg-pink-300 text-rose-800 font-bold text-[10px] md:text-[11px] rounded ml-1 tracking-wider whitespace-nowrap">월 8회</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-primary-bg/20 transition-colors">
                      <td className="py-3 md:py-4 font-semibold text-primary bg-gray-50 border-r border-gray-200">1:1</td>
                      <td className="py-3 md:py-4 border-r border-gray-200">220,000원</td>
                      <td className="py-3 md:py-4">330,000원</td>
                    </tr>
                    <tr className="hover:bg-primary-bg/20 transition-colors">
                      <td className="py-3 md:py-4 font-semibold text-primary bg-gray-50 border-r border-gray-200">2:1</td>
                      <td className="py-3 md:py-4 border-r border-gray-200">160,000원</td>
                      <td className="py-3 md:py-4">240,000원</td>
                    </tr>
                    <tr className="hover:bg-primary-bg/20 transition-colors">
                      <td className="py-3 md:py-4 font-semibold text-primary bg-gray-50 border-r border-gray-200">3:1</td>
                      <td className="py-3 md:py-4 border-r border-gray-200">140,000원</td>
                      <td className="py-3 md:py-4">200,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 티켓 레슨 */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 bg-pink-300 rounded-sm inline-block"></span>
                티켓 레슨
              </h3>
              <div className="overflow-hidden rounded border border-gray-200">
                <table className="w-full text-center text-sm md:text-base">
                  <thead>
                    <tr className="bg-primary-bg border-b border-gray-200">
                      <th className="py-3 md:py-4 px-2 font-semibold text-gray-500 w-[20%] bg-gray-50 border-r border-gray-200">구분</th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary border-r border-gray-200 w-[40%]">
                        5회 <span className="inline-block px-1.5 py-0.5 bg-pink-300 text-rose-800 font-bold text-[10px] md:text-[11px] rounded ml-1 whitespace-nowrap">유효기간 30일</span>
                      </th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary w-[40%]">
                        10회 <span className="inline-block px-1.5 py-0.5 bg-pink-300 text-rose-800 font-bold text-[10px] md:text-[11px] rounded ml-1 whitespace-nowrap">유효기간 60일</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-primary-bg/20 transition-colors">
                      <td className="py-3 md:py-4 font-semibold text-primary bg-gray-50 border-r border-gray-200">1:1</td>
                      <td className="py-3 md:py-4 border-r border-gray-200">300,000원</td>
                      <td className="py-3 md:py-4">550,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 원포인트 레슨 */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 bg-pink-300 rounded-sm inline-block"></span>
                원포인트 레슨 <span className="text-sm md:text-base font-normal text-gray-500 ml-1">(30분 기준)</span>
              </h3>
              <div className="overflow-hidden rounded border border-gray-200">
                <table className="w-full text-center text-sm md:text-base">
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-primary-bg/20 transition-colors">
                      <td className="py-3 md:py-4 font-semibold text-primary w-[20%] bg-gray-50 border-r border-gray-200">1:1</td>
                      <td className="py-3 md:py-4 font-medium">55,000원</td>
                    </tr>
                    <tr className="hover:bg-primary-bg/20 transition-colors">
                      <td className="py-3 md:py-4 font-semibold text-primary w-[20%] bg-gray-50 border-r border-gray-200">2:1</td>
                      <td className="py-3 md:py-4 font-medium">45,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 개인락커 */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 bg-pink-300 rounded-sm inline-block"></span>
                개인락커
              </h3>
              <div className="overflow-hidden rounded border border-gray-200">
                <table className="w-full text-center text-sm md:text-base">
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-primary-bg/20 transition-colors">
                      <td className="py-3 md:py-4 font-semibold text-primary w-[20%] bg-gray-50 border-r border-gray-200">1개월</td>
                      <td className="py-3 md:py-4 font-medium">5,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          {/* Guidelines Footer */}
          <div className="relative z-10 mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200 text-xs md:text-sm text-gray-600 space-y-3 leading-relaxed">
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
              <span><span className="font-semibold text-gray-800">운영시간</span> 평일 06:30~22:00 | 주말 08:00~18:00 (공휴일 별도 안내)</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
              <span>2인, 3인 레슨은 1인 기준 금액입니다.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
              <span>모든 레슨은 회당 30분 기준으로 진행됩니다.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
              <span className="font-bold text-pink-600">볼머신 / 야외 테라스 연습 가능</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
