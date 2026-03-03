import type { CourtWithStatus, Amenity } from "@/types";

const courts: CourtWithStatus[] = [
  { name: "실내 코트 A", type: "실내 하드코트", status: "운영중", desc: "LED 조명 완비, 쾌적한 실내 환경" },
  { name: "실내 코트 B", type: "실내 하드코트", status: "운영중", desc: "LED 조명 완비, 쾌적한 실내 환경" },
  { name: "야외 코트", type: "야외 하드코트", status: "운영중", desc: "자연 채광 아래 즐기는 야외 코트" },
  { name: "볼머신 연습장", type: "볼머신 전용", status: "운영중", desc: "자동 볼머신으로 자유롭게 스윙 연습" },
];

const amenities: Amenity[] = [
  { name: "샤워실 & 탈의실", desc: "남녀 분리 샤워실과 넓은 탈의실" },
  { name: "휴게 라운지", desc: "편안한 휴식 공간" },
  { name: "주차장", desc: "1층, 수강생 2시간 무료" },
];

export default function FacilitiesPage() {
  return (
    <div>
      <div className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10">
          <p className="text-pink-400 text-xs tracking-[0.2em] uppercase mb-2">Facilities</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">시설안내</h1>
          <div className="w-12 h-[2px] bg-pink-300 mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-[900px] mx-auto py-16 px-6">
        <section className="mb-14">
          <h2 className="text-xl text-primary font-semibold border-b-2 border-pink-400 pb-2 mb-6">
            코트 현황
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {courts.map((court) => (
              <div key={court.name} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-28 bg-primary flex items-center justify-center">
                  <span className="text-accent text-2xl">&#9776;</span>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">{court.name}</h3>
                    <span className="bg-accent/10 text-accent text-xs px-2 py-0.5 rounded font-semibold">
                      {court.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs">{court.type}</p>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{court.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl text-primary font-semibold border-b-2 border-pink-400 pb-2 mb-6">
            부대시설
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {amenities.map((item) => (
              <div key={item.name} className="p-5 bg-primary-bg rounded-lg border-l-4 border-pink-400">
                <h3 className="text-primary font-semibold text-sm mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
