export interface DashboardStat {
  label: string;
  value: string | number;
  change?: string;
  changeType?: "increase" | "decrease" | "neutral";
  icon?: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  membershipType: "월간" | "분기" | "연간" | "회당";
  status: "활성" | "만료" | "정지";
  joinDate: string;
  lastVisit: string;
  lessonsRemaining?: number;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  students: number;
  rating: number;
  phone: string;
  email: string;
  status: "활동중" | "휴가" | "퇴직";
  imageUrl?: string;
}

export interface Reservation {
  id: string;
  memberName: string;
  coachName: string;
  court: string;
  date: string;
  time: string;
  duration: number;
  type: "개인레슨" | "그룹레슨" | "코트대여" | "자유연습";
  status: "확정" | "대기" | "취소" | "완료";
}

export interface ScheduleSlot {
  id: string;
  day: string;
  time: string;
  court: string;
  coachName?: string;
  type: "개인레슨" | "그룹레슨" | "코트대여" | "점검" | "비어있음";
  memberName?: string;
}

export interface RevenueRecord {
  id: string;
  date: string;
  category: "레슨" | "코트대여" | "회원권" | "프로샵" | "기타";
  description: string;
  amount: number;
  paymentMethod: "카드" | "현금" | "계좌이체";
  memberName?: string;
}

export interface Facility {
  id: string;
  name: string;
  type: "실내코트" | "실외코트" | "부대시설";
  status: "사용가능" | "점검중" | "예약됨";
  surface?: string;
  capacity?: number;
  description?: string;
}

export interface ContentPage {
  id: string;
  title: string;
  slug: string;
  status: "게시중" | "임시저장" | "비공개";
  lastModified: string;
  author: string;
}

export interface Notice {
  id: string;
  title: string;
  category: "공지" | "이벤트" | "안내" | "점검";
  status: "게시중" | "예약" | "종료";
  createdAt: string;
  views: number;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  isHoliday: boolean;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "최고관리자" | "관리자" | "스태프";
  lastLogin: string;
  status: "활성" | "비활성";
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  section?: string;
}

export interface Activity {
  id: string;
  type: "reservation" | "member" | "payment" | "system";
  message: string;
  time: string;
}

export interface MonthlyRevenue {
  month: string;
  amount: number;
}

export interface Consultation {
  id: string;
  name: string;
  phone: string;
  email: string;
  type: "일반 문의" | "레슨 상담" | "시설 이용 문의" | "단체 레슨 문의" | "기타";
  message: string;
  status: "신규" | "확인" | "상담완료" | "보류";
  createdAt: string;
  note?: string;
}
