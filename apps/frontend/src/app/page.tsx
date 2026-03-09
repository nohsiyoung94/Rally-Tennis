"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import KakaoMap from "@/components/KakaoMap";
import type { Court, SectionTitleProps } from "@/types";



const viewImages = [
  { src: "/images/view/view-1.png", alt: "아카데미 조감도 1" },
  { src: "/images/view/view-2.png", alt: "아카데미 조감도 2" },
  { src: "/images/view/view-3.png", alt: "아카데미 조감도 3" },
];

/* ── About Slider Component ── */
function AboutSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % viewImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden h-64 md:h-80">
      {viewImages.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={img.alt}
          fill
          className={`object-contain md:object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {viewImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-5" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Section Title Component ── */
function SectionTitle({ eng, kor }: SectionTitleProps) {
  return (
    <div className="text-center mb-14">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#800020] tracking-wide">
        {eng}
      </h2>
      <p className="text-[#800020] text-sm mt-2 tracking-widest">{kor}</p>
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
      <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center bg-white overflow-hidden -mt-30">
        {/* Background tennis court image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80')" }}
        />
        {/* White overlay - 코트가 은은하게 비침 */}
        <div className="absolute inset-0 bg-white/50" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#800020] text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Premium Tennis Academy
          </p>
          <h1 className="text-primary text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            당신의 테니스가<br />
            <span className="text-[#800020]">시작되는 곳</span>
          </h1>
          <p className="text-primary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            체계적인 레슨 프로그램과 프리미엄 시설에서<br className="hidden md:block" />
            테니스의 진정한 즐거움을 경험하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lessons"
              className="bg-accent text-primary px-10 py-4 text-sm font-bold tracking-wider uppercase hover:bg-accent-light transition-colors"
            >
              프로그램 보기
            </Link>
            <Link
              href="/contact"
              className="border border-primary/30 text-primary px-10 py-4 text-sm font-medium tracking-wider uppercase hover:border-accent-dark hover:text-accent-dark transition-colors"
            >
              상담 문의하기
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#800020] text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 text-[#800020] relative overflow-hidden">
            <div className="w-full h-3 bg-accent-dark animate-bounce" />
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
                  <div className="text-3xl font-bold text-accent">2 구장</div>
                  <div className="text-gray-500 text-sm mt-1">실내 코트</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-accent">1 구장</div>
                  <div className="text-gray-500 text-sm mt-1">야외 코트</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-accent">2 명</div>
                  <div className="text-gray-500 text-sm mt-1">전문 코치진</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-accent">볼머신</div>
                  <div className="text-gray-500 text-sm mt-1">연습장 보유</div>
                </div>
              </div>
            </div>
            <AboutSlider />
          </div>
        </div>
      </section>


      {/* ═══ PROGRAMS PREVIEW ═══ */}
      <section id="programs" className="py-24 px-6 bg-primary-bg">
        <div ref={(el) => addRef(el, 2)} className="section-hidden max-w-[1000px] mx-auto">
          <SectionTitle eng="Programs" kor="레슨 프로그램" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl font-bold">1:1</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">개인 레슨</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                1:1 맞춤 지도로<br />빠른 실력 향상
              </p>
              <p className="text-accent font-bold text-lg">월 200,000원~</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl font-bold">2:1</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">듀오 레슨</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                함께 배우며<br />즐거운 테니스
              </p>
              <p className="text-accent font-bold text-lg">월 140,000원~</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl font-bold">3:1</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">그룹 레슨</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                합리적인 가격의<br />소그룹 레슨
              </p>
              <p className="text-accent font-bold text-lg">월 120,000원~</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/lessons"
              className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold tracking-wider uppercase hover:bg-primary hover:text-white transition-colors rounded-sm"
            >
              전체 프로그램 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ LOCATION ═══ */}
      <section id="location" className="py-24 px-6 bg-white">
        <div ref={(el) => addRef(el, 5)} className="section-hidden max-w-[1000px] mx-auto">
          <SectionTitle eng="Location" kor="오시는 길" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <KakaoMap className="w-full h-80" />

            {/* Info */}
            <div className="flex flex-col justify-center gap-6">
              <div>
                <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">주소</p>
                <p className="text-gray-800 font-medium">경기도 용인시 수지구 고기로 163, </p>
                <p className="text-gray-500 text-sm">2층(동천동, 헤이젠빌딩)</p>
              </div>
              <div>
                <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">대중 교통</p>
                <p className="text-gray-600 text-sm">동천초등학교 도보 10분<br />14번 14-번 이우중고등학교/주성카센터 하차</p>
              </div>
              <div>
                <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">주차</p>
                <p className="text-gray-600 text-sm">건물 1층 / 수강생 2시간 무료</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT CTA ═══ */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div ref={(el) => addRef(el, 6)} className="section-hidden max-w-[800px] mx-auto text-center">
          <SectionTitle eng="Contact" kor="상담 문의" />
          <p className="text-gray-600 leading-8 mb-10 -mt-6">
            레슨 상담 및 시설 이용 문의는 전화로 연락 주세요.<br />
            친절하게 안내해 드리겠습니다.
          </p>

          <div className="max-w-sm mx-auto mb-10">
            <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800">전화 상담</h3>
              <p className="text-2xl font-bold text-primary">0507-1442-2092</p>
              <a
                href="tel:0507-1442-2092"
                className="inline-block w-full text-center bg-accent text-primary font-bold py-3 rounded-lg hover:bg-accent-light transition-colors"
              >
                전화하기
              </a>
            </div>
          </div>

          <div className="inline-block bg-primary-bg rounded-lg px-8 py-5">
            <p className="text-gray-500 text-sm mb-1">상담 가능 시간</p>
            <p className="text-gray-700 text-sm">
              평일 06:30 - 22:00 | 주말 08:00 - 18:00  |  공휴일 별도 안내
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
