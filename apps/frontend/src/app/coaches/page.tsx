import Image from "next/image";
import type { CoachDetail } from "@/types";

const coaches: CoachDetail[] = [
  {
    name: "김태훈",
    role: "대표",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    career: [
      "대한테니스협회 공인 지도자",
      "前 국가대표 코치 (2015~2020)",
      "연세대학교 체육학과 석사",
      "지도 경력 15년",
    ],
    awards: [
      "대한테니스협회 우수지도자상 (2019)",
      "전국체전 테니스 금메달 지도 (2018)",
      "KTA 프로 자격 취득",
    ],
    specialty: "전술 분석 및 경기력 향상",
    message: "기본기에 충실한 훈련이 최고의 경기력을 만듭니다. 함께 성장하겠습니다.",
  },
  {
    name: "이서준",
    role: "코치",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80",
    career: [
      "대한테니스협회 공인 지도자",
      "지도 경력 다수",
    ],
    awards: [
      "KTA 자격 취득",
    ],
    specialty: "기초 레슨 및 실력 향상",
    message: "즐거운 테니스, 함께 만들어 가겠습니다.",
  },
];

export default function CoachesPage() {
  return (
    <div>
      <div className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10">
          <p className="text-pink-400 text-xs tracking-[0.2em] uppercase mb-2">Our Coaches</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">강사 소개</h1>
          <div className="w-12 h-[2px] bg-pink-300 mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto py-16 px-6">
        <p className="text-center text-gray-600 leading-7 mb-14">
          랠리테니스 아카데미의 전문 코치진을 소개합니다.<br />
          풍부한 경험과 체계적인 교육 방법으로 여러분의 테니스 실력 향상을 도와드립니다.
        </p>

        <div className="space-y-16">
          {coaches.map((coach, i) => (
            <div
              key={coach.name}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-stretch`}
            >
              {/* Photo */}
              <div className="md:w-2/5 flex-shrink-0">
                <div className="relative w-full h-80 md:h-full min-h-[320px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={coach.imageUrl}
                    alt={`${coach.name} 코치`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Name badge on image */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent text-primary text-xs px-3 py-1 rounded font-bold mr-2">
                      {coach.role}
                    </span>
                    <span className="text-white font-bold text-lg drop-shadow-md">{coach.name}</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="md:w-3/5 flex flex-col justify-center">
                <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-1">
                  {coach.specialty}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-5">
                  {coach.name} <span className="text-gray-400 font-normal text-lg">코치</span>
                </h3>

                {/* Career */}
                <div className="mb-5">
                  <h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-1.5">
                    <span className="w-1 h-4 bg-accent rounded-full inline-block" />
                    경력
                  </h4>
                  <ul className="pl-5 text-gray-600 text-sm leading-7 list-disc">
                    {coach.career.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Awards */}
                <div className="mb-5">
                  <h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-1.5">
                    <span className="w-1 h-4 bg-accent rounded-full inline-block" />
                    수상 및 자격
                  </h4>
                  <ul className="pl-5 text-gray-600 text-sm leading-7 list-disc">
                    {coach.awards.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Message */}
                {coach.message && (
                  <div className="bg-primary-bg rounded-lg p-4 border-l-4 border-accent">
                    <p className="text-gray-700 text-sm italic leading-relaxed">
                      &ldquo;{coach.message}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
