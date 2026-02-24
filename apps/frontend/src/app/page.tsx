"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { Court, SectionTitleProps } from "@/types";



/* ── Section Title Component ── */
function SectionTitle({ eng, kor }: SectionTitleProps) {
  return (
    <div className="text-center mb-14">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary tracking-wide">
        {eng}
      </h2>
      <p className="text-gray-500 text-sm mt-2 tracking-widest">{kor}</p>
      <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
    </div>
  );
}

/* ── Page ── */
export default function HomePage() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLDivElement | null, i: number) => {
    if (el) sectionsRef.current[i] = el;
  };

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden -mt-40">
        {/* Background tennis image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Premium Tennis Academy
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            당신의 테니스가<br />
            <span className="text-accent">시작되는 곳</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            체계적인 레슨 프로그램과 프리미엄 시설에서<br className="hidden md:block" />
            테니스의 진정한 즐거움을 경험하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-primary px-10 py-4 text-sm font-bold tracking-wider uppercase hover:bg-accent-light transition-colors"
            >
              상담 문의하기
            </Link>
            <Link
              href="/lessons"
              className="border border-white/30 text-white px-10 py-4 text-sm font-medium tracking-wider uppercase hover:border-accent hover:text-accent transition-colors"
            >
              프로그램 보기
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
            <div className="w-full h-3 bg-accent animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-24 px-6 bg-white">
        <div ref={(el) => addRef(el, 0)} className="section-hidden max-w-[1000px] mx-auto">
          <SectionTitle eng="About" kor="아카데미 소개" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4 leading-snug">
                테니스를 사랑하는<br />모든 분들을 위한 공간
              </h3>
              <p className="text-gray-600 leading-8 mb-6">
                랠리테니스 아카데미는 초보자부터 선수 지망생까지,
                체계적인 커리큘럼과 전문 코치진의 지도 아래
                누구나 테니스의 즐거움을 경험할 수 있는 프리미엄 아카데미입니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-gray-500 text-sm mt-1">년 지도 경력</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-accent">4</div>
                  <div className="text-gray-500 text-sm mt-1">전문 코트</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-gray-500 text-sm mt-1">수강생</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-accent">4</div>
                  <div className="text-gray-500 text-sm mt-1">전문 코치진</div>
                </div>
              </div>
            </div>
            <div className="bg-primary-bg2 rounded-lg h-80 flex items-center justify-center text-gray-400 text-sm">
              아카데미 대표 이미지
            </div>
          </div>
        </div>
      </section>


      {/* ═══ CONTACT CTA ═══ */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div ref={(el) => addRef(el, 4)} className="section-hidden max-w-[800px] mx-auto text-center">
          <SectionTitle eng="Contact" kor="상담 문의" />
          <p className="text-gray-600 leading-8 mb-10 -mt-6">
            레슨 상담 및 시설 이용 문의는 전화 또는 카카오톡으로 연락 주세요.<br />
            친절하게 안내해 드리겠습니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-primary-bg rounded-lg">
              <p className="text-accent font-bold text-lg mb-1">전화</p>
              <p className="text-gray-700 font-medium">02-1234-5678</p>
            </div>
            <div className="p-6 bg-primary-bg rounded-lg">
              <p className="text-accent font-bold text-lg mb-1">카카오톡</p>
              <p className="text-gray-700 font-medium">@랠리테니스</p>
            </div>
            <div className="p-6 bg-primary-bg rounded-lg">
              <p className="text-accent font-bold text-lg mb-1">이메일</p>
              <p className="text-gray-700 font-medium">info@rallytennis.co.kr</p>
            </div>
          </div>

          <div className="inline-block bg-primary-bg rounded-lg px-8 py-5">
            <p className="text-gray-500 text-sm mb-1">상담 가능 시간</p>
            <p className="text-gray-700 text-sm">
              평일 09:00 - 21:00 | 토요일 09:00 - 18:00 | 일/공휴일 휴무
            </p>
          </div>
        </div>
      </section>

      {/* ═══ LOCATION ═══ */}
      <section id="location" className="py-24 px-6 bg-primary-bg">
        <div ref={(el) => addRef(el, 5)} className="section-hidden max-w-[1000px] mx-auto">
          <SectionTitle eng="Location" kor="오시는 길" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Map placeholder */}
            <div className="bg-primary-bg2 rounded-lg h-80 flex items-center justify-center text-gray-400 text-sm border border-gray-200">
              지도 영역 (카카오맵 / 네이버맵 연동 예정)
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center gap-6">
              <div>
                <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">Address</p>
                <p className="text-gray-800 font-medium">서울특별시 강남구 테니스로 123</p>
                <p className="text-gray-500 text-sm">랠리테니스 아카데미 빌딩 1~3층</p>
              </div>
              <div>
                <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">Subway</p>
                <p className="text-gray-600 text-sm">2호선 테니스역 3번 출구 도보 5분</p>
              </div>
              <div>
                <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">Bus</p>
                <p className="text-gray-600 text-sm">340, 401, 740번 테니스정류장 하차</p>
              </div>
              <div>
                <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">Parking</p>
                <p className="text-gray-600 text-sm">건물 지하 1~2층 / 수강생 2시간 무료</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
