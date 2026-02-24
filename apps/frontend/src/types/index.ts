/* ── 네비게이션 ── */
export interface MenuItem {
  href: string;
  label: string;
}

/* ── 레슨 프로그램 ── */
// 홈 페이지용 (간략)
export interface ProgramSummary {
  title: string;
  eng: string;
  desc: string;
  price: string;
}

// 레슨 서브페이지용 (상세)
export interface ProgramDetail {
  title: string;
  level: string;
  desc: string;
  price: string;
  details: string[];
}

/* ── 코치 ── */
// 홈 페이지용 (간략)
export interface CoachSummary {
  name: string;
  role: string;
  career: string;
  specialty: string;
}

// 코치 서브페이지용 (상세)
export interface CoachDetail {
  name: string;
  role: string;
  imageUrl: string;
  career: string[];
  awards: string[];
  specialty: string;
  message?: string;
}

/* ── 시설 ── */
export interface Court {
  name: string;
  type: string;
  desc: string;
}

export interface CourtWithStatus extends Court {
  status: string;
}

export interface Amenity {
  name: string;
  desc: string;
}

/* ── 연락처 ── */
export interface ContactInfo {
  title: string;
  value: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  type: string;
  message: string;
}

/* ── 위치 ── */
export interface InfoCard {
  title: string;
  content: string;
}

/* ── 아카데미 소개 ── */
export interface Feature {
  title: string;
  desc: string;
}

/* ── 컴포넌트 Props ── */
export interface SectionTitleProps {
  eng: string;
  kor: string;
}
