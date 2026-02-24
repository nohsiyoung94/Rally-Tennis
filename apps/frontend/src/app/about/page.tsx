import type { Feature } from "@/types";

const hours = [
  ["평일", "06:00 - 22:00"],
  ["토요일", "07:00 - 20:00"],
  ["일요일 / 공휴일", "08:00 - 18:00"],
];

export default function AboutPage() {
  return (
    <div>
      <div className="bg-primary text-white py-20 px-6 text-center">
        <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">About Us</p>
        <h1 className="text-3xl md:text-4xl font-bold">아카데미 소개</h1>
        <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
      </div>

      <div className="max-w-[900px] mx-auto py-16 px-6">
        <section className="mb-14">
          <h2 className="text-xl text-primary font-semibold border-b-2 border-accent pb-2 mb-6">
            RALLY TENNIS STUDIO
          </h2>

          <div className="bg-primary-bg rounded-2xl p-8 md:p-12 space-y-8">
            {/* 인사말 */}
            <div className="text-center">
              <p className="text-primary font-semibold text-lg md:text-xl leading-relaxed">
                안녕하세요, 랠리테니스스튜디오입니다.
              </p>
              <div className="w-8 h-[2px] bg-accent mx-auto mt-4" />
            </div>

            {/* 철학 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-accent shadow-sm">
              <p className="text-gray-700 leading-8 text-[15px] md:text-base">
                랠리테니스스튜디오는{" "}
                <span className="text-primary font-semibold">테니스의 본질인 랠리에 집중</span>하는
                테니스 스튜디오입니다.
              </p>
              <p className="text-gray-600 leading-8 mt-4 text-[15px] md:text-base">
                한 번의 강한 샷보다<br />
                상대와 공을 주고받으며 이어지는 흐름,<br />
                실전에서 끊기지 않는 랠리를 만드는 것이<br />
                <span className="text-primary font-medium">테니스 실력의 핵심</span>이라고 생각합니다.
              </p>
            </div>

            {/* 레슨 소개 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-primary-lighter shadow-sm">
              <p className="text-gray-700 leading-8 text-[15px] md:text-base">
                랠리테니스스튜디오는<br />
                <span className="text-primary font-medium">집중도 높은 실내 환경</span>에서<br />
                개인의 레벨과 목적에 맞춘 커리큘럼으로<br />
                레슨을 진행합니다.
              </p>
            </div>

            {/* 슬로건 */}
            <div className="text-center pt-2">
              <span className="text-accent font-serif text-lg md:text-xl italic tracking-wide">
                테니스를 더 쉽게, 더 오래.
              </span>
              <p className="text-gray-600 mt-3 text-[15px]">
                랠리테니스스튜디오는<br />
                지속 가능한 테니스를 만들어갑니다.
              </p>
            </div>
          </div>
        </section>



        <section>
          <h2 className="text-xl text-primary font-semibold border-b-2 border-accent pb-2 mb-6">
            운영 시간
          </h2>
          <table className="w-full">
            <tbody>
              {hours.map(([day, time]) => (
                <tr key={day} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-semibold text-gray-800 w-2/5">{day}</td>
                  <td className="py-3 px-4 text-gray-600">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
