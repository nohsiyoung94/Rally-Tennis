import type {
  DashboardStat,
  Member,
  Coach,
  Reservation,
  ScheduleSlot,
  RevenueRecord,
  Facility,
  ContentPage,
  Notice,
  BusinessHours,
  AdminUser,
  NavItem,
  Activity,
  MonthlyRevenue,
  Consultation,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "대시보드", href: "/", icon: "📊", section: "메인" },
  { label: "예약 관리", href: "/reservations", icon: "📅", section: "운영" },
  { label: "회원 관리", href: "/members", icon: "👥", section: "운영" },
  { label: "스케줄 관리", href: "/schedule", icon: "🕐", section: "운영" },
  { label: "상담문의", href: "/consultations", icon: "💬", section: "운영" },
  { label: "콘텐츠 관리", href: "/content", icon: "📝", section: "사이트" },
  { label: "설정", href: "/settings", icon: "⚙️", section: "시스템" },
];

export const dashboardStats: DashboardStat[] = [
  { label: "오늘 예약", value: 12, change: "+3", changeType: "increase" },
  { label: "총 회원수", value: 158, change: "+5", changeType: "increase" },
  { label: "이번 달 매출", value: "₩4,200,000", change: "+12%", changeType: "increase" },
  { label: "활성 코치", value: 6, change: "0", changeType: "neutral" },
  { label: "코트 이용률", value: "85%", change: "+8%", changeType: "increase" },
  { label: "신규 문의", value: 8, change: "-2", changeType: "decrease" },
];

export const members: Member[] = [
  { id: "M001", name: "김서연", email: "seo@email.com", phone: "010-1234-5678", membershipType: "월간", status: "활성", joinDate: "2025-03-15", lastVisit: "2026-02-22", lessonsRemaining: 4 },
  { id: "M002", name: "이준호", email: "junho@email.com", phone: "010-2345-6789", membershipType: "분기", status: "활성", joinDate: "2025-06-01", lastVisit: "2026-02-21", lessonsRemaining: 12 },
  { id: "M003", name: "박지민", email: "jimin@email.com", phone: "010-3456-7890", membershipType: "연간", status: "활성", joinDate: "2025-01-10", lastVisit: "2026-02-23", lessonsRemaining: 30 },
  { id: "M004", name: "최수아", email: "sua@email.com", phone: "010-4567-8901", membershipType: "월간", status: "만료", joinDate: "2025-09-20", lastVisit: "2026-01-15" },
  { id: "M005", name: "정민재", email: "minjae@email.com", phone: "010-5678-9012", membershipType: "회당", status: "활성", joinDate: "2025-11-05", lastVisit: "2026-02-20", lessonsRemaining: 2 },
  { id: "M006", name: "한유진", email: "yujin@email.com", phone: "010-6789-0123", membershipType: "분기", status: "활성", joinDate: "2025-08-12", lastVisit: "2026-02-23", lessonsRemaining: 8 },
  { id: "M007", name: "윤도현", email: "dohyun@email.com", phone: "010-7890-1234", membershipType: "월간", status: "정지", joinDate: "2025-04-01", lastVisit: "2025-12-30" },
  { id: "M008", name: "강하은", email: "haeun@email.com", phone: "010-8901-2345", membershipType: "연간", status: "활성", joinDate: "2025-02-28", lastVisit: "2026-02-22", lessonsRemaining: 25 },
];

export const coaches: Coach[] = [
  { id: "C001", name: "김태영", role: "헤드코치", experience: "15년", specialties: ["서브", "전략"], students: 25, rating: 4.9, phone: "010-1111-2222", email: "taeyoung@rally.com", status: "활동중" },
  { id: "C002", name: "이수진", role: "수석코치", experience: "10년", specialties: ["포핸드", "백핸드"], students: 20, rating: 4.8, phone: "010-2222-3333", email: "sujin@rally.com", status: "활동중" },
  { id: "C003", name: "박준혁", role: "코치", experience: "7년", specialties: ["주니어", "기초"], students: 18, rating: 4.7, phone: "010-3333-4444", email: "junhyuk@rally.com", status: "활동중" },
  { id: "C004", name: "최예린", role: "코치", experience: "5년", specialties: ["여성반", "그룹레슨"], students: 22, rating: 4.8, phone: "010-4444-5555", email: "yerin@rally.com", status: "활동중" },
  { id: "C005", name: "정우성", role: "코치", experience: "8년", specialties: ["실전경기", "복식"], students: 15, rating: 4.6, phone: "010-5555-6666", email: "woosung@rally.com", status: "휴가" },
  { id: "C006", name: "한소희", role: "보조코치", experience: "3년", specialties: ["초급", "키즈"], students: 12, rating: 4.5, phone: "010-6666-7777", email: "sohee@rally.com", status: "활동중" },
];

export const reservations: Reservation[] = [
  { id: "R001", memberName: "김서연", coachName: "김태영", court: "메인코트", date: "2026-02-23", time: "09:00", duration: 60, type: "개인레슨", status: "확정" },
  { id: "R002", memberName: "이준호", coachName: "이수진", court: "메인코트", date: "2026-02-23", time: "10:00", duration: 90, type: "개인레슨", status: "확정" },
  { id: "R003", memberName: "박지민", coachName: "박준혁", court: "메인코트", date: "2026-02-23", time: "11:00", duration: 60, type: "그룹레슨", status: "대기" },
  { id: "R004", memberName: "최수아", coachName: "-", court: "메인코트", date: "2026-02-23", time: "14:00", duration: 120, type: "코트대여", status: "확정" },
  { id: "R005", memberName: "정민재", coachName: "최예린", court: "메인코트", date: "2026-02-23", time: "15:00", duration: 60, type: "개인레슨", status: "확정" },
  { id: "R006", memberName: "한유진", coachName: "김태영", court: "메인코트", date: "2026-02-23", time: "16:00", duration: 60, type: "개인레슨", status: "취소" },
  { id: "R007", memberName: "윤도현", coachName: "-", court: "메인코트", date: "2026-02-24", time: "09:00", duration: 60, type: "자유연습", status: "대기" },
  { id: "R008", memberName: "강하은", coachName: "이수진", court: "메인코트", date: "2026-02-24", time: "10:00", duration: 90, type: "개인레슨", status: "확정" },
];

export const scheduleSlots: ScheduleSlot[] = [
  { id: "S001", day: "월", time: "09:00", court: "메인코트", coachName: "김태영", type: "개인레슨", memberName: "김서연" },
  { id: "S002", day: "월", time: "09:00", court: "메인코트", coachName: "이수진", type: "그룹레슨" },
  { id: "S003", day: "월", time: "10:00", court: "메인코트", coachName: "박준혁", type: "개인레슨", memberName: "이준호" },
  { id: "S004", day: "월", time: "10:00", court: "메인코트", type: "비어있음" },
  { id: "S005", day: "화", time: "09:00", court: "메인코트", coachName: "최예린", type: "그룹레슨" },
  { id: "S006", day: "화", time: "10:00", court: "메인코트", coachName: "김태영", type: "개인레슨", memberName: "박지민" },
  { id: "S007", day: "수", time: "09:00", court: "메인코트", type: "점검" },
  { id: "S008", day: "수", time: "09:00", court: "메인코트", coachName: "이수진", type: "개인레슨", memberName: "한유진" },
  { id: "S009", day: "수", time: "10:00", court: "메인코트", coachName: "김태영", type: "개인레슨", memberName: "강하은" },
  { id: "S010", day: "목", time: "09:00", court: "메인코트", coachName: "박준혁", type: "그룹레슨" },
  { id: "S011", day: "목", time: "10:00", court: "메인코트", coachName: "최예린", type: "개인레슨", memberName: "정민재" },
  { id: "S012", day: "금", time: "09:00", court: "메인코트", coachName: "김태영", type: "개인레슨", memberName: "김서연" },
  { id: "S013", day: "금", time: "10:00", court: "메인코트", coachName: "한소희", type: "개인레슨", memberName: "최수아" },
  { id: "S014", day: "토", time: "09:00", court: "메인코트", coachName: "이수진", type: "그룹레슨" },
  { id: "S015", day: "토", time: "09:00", court: "메인코트", coachName: "박준혁", type: "그룹레슨" },
  { id: "S016", day: "토", time: "10:00", court: "메인코트", type: "코트대여" },
];

export const facilities: Facility[] = [
  { id: "F001", name: "메인코트", type: "실내코트", status: "사용가능", surface: "하드코트", capacity: 4, description: "LED 조명 완비 / 국제 규격 실내 하드코트" },
  { id: "F005", name: "피트니스룸", type: "부대시설", status: "사용가능", capacity: 10, description: "웨이트 + 스트레칭 공간" },
  { id: "F006", name: "라운지", type: "부대시설", status: "사용가능", capacity: 20, description: "회원 휴게 공간 / 음료 자판기" },
  { id: "F007", name: "프로샵", type: "부대시설", status: "사용가능", description: "라켓, 스트링, 의류 판매" },
  { id: "F008", name: "샤워실", type: "부대시설", status: "사용가능", capacity: 6, description: "남/여 분리" },
];

export const contentPages: ContentPage[] = [
  { id: "CP001", title: "메인 페이지", slug: "/", status: "게시중", lastModified: "2026-02-20", author: "관리자" },
  { id: "CP002", title: "소개 페이지", slug: "/about", status: "게시중", lastModified: "2026-02-18", author: "관리자" },
  { id: "CP003", title: "시설 안내", slug: "/facilities", status: "게시중", lastModified: "2026-02-15", author: "김태영" },
  { id: "CP004", title: "레슨 프로그램", slug: "/lessons", status: "게시중", lastModified: "2026-02-10", author: "이수진" },
  { id: "CP005", title: "오시는 길", slug: "/location", status: "게시중", lastModified: "2026-01-25", author: "관리자" },
  { id: "CP006", title: "이벤트 페이지 (봄)", slug: "/event-spring", status: "임시저장", lastModified: "2026-02-22", author: "관리자" },
];

export const notices: Notice[] = [
  { id: "N001", title: "2월 운영시간 변경 안내", category: "공지", status: "게시중", createdAt: "2026-02-01", views: 234 },
  { id: "N002", title: "봄맞이 회원 할인 이벤트", category: "이벤트", status: "게시중", createdAt: "2026-02-10", views: 189 },
  { id: "N003", title: "메인코트 정기점검 안내 (2/25~2/27)", category: "점검", status: "게시중", createdAt: "2026-02-20", views: 67 },
  { id: "N004", title: "신규 코치 소개 - 한소희 코치", category: "안내", status: "게시중", createdAt: "2026-02-15", views: 142 },
  { id: "N005", title: "3월 그룹레슨 모집 안내", category: "공지", status: "예약", createdAt: "2026-02-23", views: 0 },
];

export const businessHours: BusinessHours[] = [
  { day: "월요일", open: "06:30", close: "22:00", isHoliday: false },
  { day: "화요일", open: "06:30", close: "22:00", isHoliday: false },
  { day: "수요일", open: "06:30", close: "22:00", isHoliday: false },
  { day: "목요일", open: "06:30", close: "22:00", isHoliday: false },
  { day: "금요일", open: "06:30", close: "22:00", isHoliday: false },
  { day: "토요일", open: "08:00", close: "18:00", isHoliday: false },
  { day: "일요일", open: "08:00", close: "18:00", isHoliday: false },
];

export const adminUsers: AdminUser[] = [
  { id: "A001", name: "관리자", email: "admin@rallytennis.kr", role: "최고관리자", lastLogin: "2026-02-23 09:15", status: "활성" },
  { id: "A002", name: "김태영", email: "taeyoung@rallytennis.kr", role: "관리자", lastLogin: "2026-02-22 14:30", status: "활성" },
  { id: "A003", name: "이수진", email: "sujin@rallytennis.kr", role: "스태프", lastLogin: "2026-02-21 11:00", status: "활성" },
];

export const recentActivities: Activity[] = [
  { id: "ACT001", type: "reservation", message: "김서연님이 2/23 09:00 개인레슨을 예약했습니다", time: "10분 전" },
  { id: "ACT002", type: "payment", message: "이준호님 레슨비 120,000원 결제 완료", time: "25분 전" },
  { id: "ACT003", type: "member", message: "한유진님이 분기 회원권을 갱신했습니다", time: "1시간 전" },
  { id: "ACT004", type: "reservation", message: "박지민님이 2/23 11:00 그룹레슨 예약을 취소했습니다", time: "2시간 전" },
  { id: "ACT005", type: "system", message: "메인코트 점검 일정이 등록되었습니다 (2/25~2/27)", time: "3시간 전" },
  { id: "ACT006", type: "payment", message: "박지민님 연간회원 갱신 1,200,000원 입금 확인", time: "4시간 전" },
  { id: "ACT007", type: "member", message: "신규 회원 가입: 강하은님", time: "5시간 전" },
];

export const consultations: Consultation[] = [
  { id: "CON001", name: "이하늘", phone: "010-9999-1111", email: "haneul@email.com", type: "레슨 상담", message: "초등학생 아이 주니어 레슨 프로그램 문의드립니다. 주 2회 가능한지 궁금합니다.", status: "신규", createdAt: "2026-02-23 14:30" },
  { id: "CON002", name: "박성민", phone: "010-8888-2222", email: "sungmin@email.com", type: "단체 레슨 문의", message: "회사 동호회 10명 정도 단체 레슨 가능할까요? 주말 오전 희망합니다.", status: "신규", createdAt: "2026-02-23 11:20" },
  { id: "CON003", name: "김미영", phone: "010-7777-3333", email: "miyoung@email.com", type: "시설 이용 문의", message: "코트 대여 가격이랑 예약 방법 알고 싶습니다. 평일 저녁 시간대 가능한가요?", status: "확인", createdAt: "2026-02-22 16:45", note: "전화 연결 완료, 평일 저녁 코트 안내함" },
  { id: "CON004", name: "정수진", phone: "010-6666-4444", email: "", type: "레슨 상담", message: "테니스 완전 초보인데 성인 입문반 있나요? 수업 분위기가 궁금해요.", status: "상담완료", createdAt: "2026-02-21 09:10", note: "체험 레슨 2/25 예약 완료" },
  { id: "CON005", name: "최재호", phone: "010-5555-5555", email: "jaeho@email.com", type: "일반 문의", message: "주차장 이용 가능한지, 샤워시설 있는지 궁금합니다.", status: "상담완료", createdAt: "2026-02-20 13:00", note: "시설 안내 문자 발송 완료" },
  { id: "CON006", name: "한지우", phone: "010-4444-6666", email: "jiwoo@email.com", type: "레슨 상담", message: "중급자인데 서브 교정 집중 레슨 가능한 코치님 있으신가요?", status: "보류", createdAt: "2026-02-19 17:30", note: "김태영 코치 스케줄 확인 중" },
  { id: "CON007", name: "오승현", phone: "010-3333-7777", email: "", type: "기타", message: "프로샵에서 라켓 스트링 교체 서비스도 하시나요? 가격대도 알려주세요.", status: "확인", createdAt: "2026-02-18 10:50" },
  { id: "CON008", name: "장유나", phone: "010-2222-8888", email: "yuna@email.com", type: "단체 레슨 문의", message: "학교 방과후 테니스 수업 외부 강사 파견 가능하신지 문의합니다.", status: "신규", createdAt: "2026-02-23 09:05" },
];
