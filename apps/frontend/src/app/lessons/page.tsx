import Image from "next/image";

export default function LessonsPage() {
  return (
    <div>
      <div className="bg-primary text-white py-20 px-6 text-center">
        <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">Programs</p>
        <h1 className="text-3xl md:text-4xl font-bold">레슨 프로그램</h1>
        <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
      </div>

      <div className="max-w-[850px] mx-auto py-16 px-6">
        {/* Container looking like the tablet reference poster */}
        <div className="bg-white border-[12px] border-primary-bg rounded-2xl p-6 md:p-12 shadow-sm">

          {/* Header area */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 border-b-2 border-primary pb-6 gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/흰배경.png"
                alt="랠리테니스 로고"
                width={360}
                height={120}
                className="object-contain w-auto h-24 md:h-28"
              />
              <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">RALLY TENNIS</h2>
              <p className="text-accent font-semibold tracking-widest text-sm md:text-base">ACADEMY</p>

            </div>
            <p className="text-sm font-medium text-gray-500">
              * 부가세(VAT)는 별도입니다.
            </p>
          </div>

          <div className="space-y-12">

            {/* 평일 레슨 4주 프로그램 */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 bg-accent rounded-sm inline-block"></span>
                평일 레슨 4주 프로그램
              </h3>
              <div className="overflow-hidden rounded border border-gray-200">
                <table className="w-full text-center text-sm md:text-base">
                  <thead>
                    <tr className="bg-primary-bg border-b border-gray-200">
                      <th className="py-3 md:py-4 px-2 font-semibold text-gray-500 w-[20%] bg-gray-50 border-r border-gray-200">구분</th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary border-r border-gray-200">
                        주 1회 <span className="inline-block px-1.5 py-0.5 bg-accent text-white text-[10px] md:text-[11px] rounded ml-1 tracking-wider whitespace-nowrap">월 4회</span>
                      </th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary border-r border-gray-200">
                        주 2회 <span className="inline-block px-1.5 py-0.5 bg-accent text-white text-[10px] md:text-[11px] rounded ml-1 tracking-wider whitespace-nowrap">월 8회</span>
                      </th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary">
                        주 3회 <span className="inline-block px-1.5 py-0.5 bg-accent text-white text-[10px] md:text-[11px] rounded ml-1 tracking-wider whitespace-nowrap">월 12회</span>
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
                <span className="w-1.5 h-6 bg-accent rounded-sm inline-block"></span>
                주말 레슨 4주 프로그램
              </h3>
              <div className="overflow-hidden rounded border border-gray-200">
                <table className="w-full text-center text-sm md:text-base">
                  <thead>
                    <tr className="bg-primary-bg border-b border-gray-200">
                      <th className="py-3 md:py-4 px-2 font-semibold text-gray-500 w-[20%] bg-gray-50 border-r border-gray-200">구분</th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary border-r border-gray-200 w-[40%]">
                        주 1회 <span className="inline-block px-1.5 py-0.5 bg-accent text-white text-[10px] md:text-[11px] rounded ml-1 tracking-wider whitespace-nowrap">월 4회</span>
                      </th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary w-[40%]">
                        주 2회 <span className="inline-block px-1.5 py-0.5 bg-accent text-white text-[10px] md:text-[11px] rounded ml-1 tracking-wider whitespace-nowrap">월 8회</span>
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
                <span className="w-1.5 h-6 bg-accent rounded-sm inline-block"></span>
                티켓 레슨
              </h3>
              <div className="overflow-hidden rounded border border-gray-200">
                <table className="w-full text-center text-sm md:text-base">
                  <thead>
                    <tr className="bg-primary-bg border-b border-gray-200">
                      <th className="py-3 md:py-4 px-2 font-semibold text-gray-500 w-[20%] bg-gray-50 border-r border-gray-200">구분</th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary border-r border-gray-200 w-[40%]">
                        5회 <span className="inline-block px-1.5 py-0.5 bg-primary/20 text-primary font-semibold text-[10px] md:text-[11px] rounded ml-1 whitespace-nowrap">유효기간 30일</span>
                      </th>
                      <th className="py-3 md:py-4 px-2 font-bold text-primary w-[40%]">
                        10회 <span className="inline-block px-1.5 py-0.5 bg-primary/20 text-primary font-semibold text-[10px] md:text-[11px] rounded ml-1 whitespace-nowrap">유효기간 60일</span>
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
                <span className="w-1.5 h-6 bg-accent rounded-sm inline-block"></span>
                원포인트 레슨 <span className="text-sm md:text-base font-normal text-gray-500 ml-1">(30분 기준)</span>
              </h3>
              <div className="overflow-hidden rounded border border-gray-200">
                <table className="w-full text-center text-sm md:text-base">
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-primary-bg/20 transition-colors">
                      <td className="py-3 md:py-4 font-semibold text-primary w-[20%] bg-gray-50 border-r border-gray-200">1:1</td>
                      <td className="py-3 md:py-4 font-medium">55,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          {/* Guidelines Footer */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200 text-xs md:text-sm text-gray-600 space-y-3 leading-relaxed">
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
            <p className="flex items-start gap-2 text-primary font-medium">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
              <span>볼머신 연습 가능 (코트가 비어있을 경우에 한함)</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
