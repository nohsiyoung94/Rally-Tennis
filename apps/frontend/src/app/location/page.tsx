import type { InfoCard } from "@/types";

const infoCards: InfoCard[] = [
  { title: "주소", content: "서울특별시 강남구 테니스로 123\n랠리테니스 아카데미 빌딩 1~3층" },
  { title: "대중교통", content: "지하철: 2호선 테니스역 3번 출구 도보 5분\n버스: 340, 401, 740번 테니스정류장 하차" },
  { title: "주차 안내", content: "건물 지하 1~2층 주차장 이용 가능\n레슨 수강생 2시간 무료 주차" },
  { title: "연락처", content: "전화: 02-1234-5678\n이메일: info@rallytennis.co.kr" },
];

export default function LocationPage() {
  return (
    <div>
      <div className="bg-primary text-white py-20 px-6 text-center">
        <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">Location</p>
        <h1 className="text-3xl md:text-4xl font-bold">위치안내</h1>
        <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
      </div>

      <div className="max-w-[900px] mx-auto py-16 px-6">
        <div className="w-full h-96 bg-primary-bg2 rounded-lg flex items-center justify-center text-gray-400 border border-gray-200 mb-10">
          지도 영역 (카카오맵 / 네이버맵 API 연동 예정)
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {infoCards.map((item) => (
            <div key={item.title} className="p-5 bg-primary-bg rounded-lg border-l-4 border-accent">
              <h3 className="text-primary font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-7 whitespace-pre-line">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
