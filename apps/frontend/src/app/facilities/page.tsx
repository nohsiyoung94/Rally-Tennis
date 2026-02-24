import type { CourtWithStatus, Amenity } from "@/types";

const courts: CourtWithStatus[] = [
  { name: "A코트", type: "하드코트", status: "운영중", desc: "국제 규격 하드코트로 대회 연습에 적합" },
  { name: "B코트", type: "하드코트", status: "운영중", desc: "야간 조명 완비, 저녁 레슨 가능" },
  { name: "C코트", type: "클레이코트", status: "운영중", desc: "관절에 부담이 적은 클레이 서페이스" },
  { name: "D코트", type: "실내코트", status: "운영중", desc: "날씨와 관계없이 쾌적한 실내 환경" },
];

const amenities: Amenity[] = [
  { name: "샤워실 & 탈의실", desc: "남녀 분리 샤워실과 넓은 탈의실" },
  { name: "휴게 라운지", desc: "음료 자판기와 편안한 휴식 공간" },
  { name: "주차장", desc: "지하 1~2층, 수강생 2시간 무료" },
  { name: "프로샵", desc: "라켓, 스트링, 용품 구매 가능" },
];

export default function FacilitiesPage() {
  return (
    <div>
      <div className="bg-primary text-white py-20 px-6 text-center">
        <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">Facilities</p>
        <h1 className="text-3xl md:text-4xl font-bold">시설안내</h1>
        <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
      </div>

      <div className="max-w-[900px] mx-auto py-16 px-6">
        <section className="mb-14">
          <h2 className="text-xl text-primary font-semibold border-b-2 border-accent pb-2 mb-6">
            코트 현황
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
          <h2 className="text-xl text-primary font-semibold border-b-2 border-accent pb-2 mb-6">
            부대시설
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {amenities.map((item) => (
              <div key={item.name} className="p-5 bg-primary-bg rounded-lg border-l-4 border-accent">
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
