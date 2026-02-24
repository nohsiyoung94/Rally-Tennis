"use client";

import { useState } from "react";
import type { ContactInfo, ContactForm } from "@/types";

const contactInfo: ContactInfo[] = [
  { title: "전화", value: "02-1234-5678" },
  { title: "카카오톡", value: "@랠리테니스" },
  { title: "이메일", value: "info@rallytennis.co.kr" },
  { title: "주소", value: "서울특별시 강남구 테니스로 123" },
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({ name: "", phone: "", email: "", type: "일반 문의", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
  };

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white";

  return (
    <div>
      <div className="bg-primary text-white py-20 px-6 text-center">
        <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">Contact Us</p>
        <h1 className="text-3xl md:text-4xl font-bold">상담문의</h1>
        <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
      </div>

      <div className="max-w-[900px] mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl text-primary font-semibold mb-6">상담 문의하기</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-600">이름 *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-600">연락처 *</label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="010-0000-0000" className={inputClass} />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-600">이메일</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-600">문의 유형</label>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className={`${inputClass}`}>
                  <option>일반 문의</option>
                  <option>레슨 상담</option>
                  <option>시설 이용 문의</option>
                  <option>단체 레슨 문의</option>
                  <option>기타</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-600">문의 내용 *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="문의하실 내용을 입력해주세요."
                  className={`${inputClass} resize-y`}
                />
              </div>
              <button
                type="submit"
                className="bg-accent text-primary border-none py-3 rounded-md text-base font-bold cursor-pointer hover:bg-accent-light transition-colors mt-2"
              >
                문의하기
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-xl text-primary font-semibold mb-6">연락처 정보</h2>
            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-primary-bg rounded-lg border-l-4 border-accent">
                  <div>
                    <div className="font-semibold text-sm text-primary">{item.title}</div>
                    <div className="text-gray-600 text-sm mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-primary-bg rounded-lg border border-gray-200">
              <h3 className="text-accent font-semibold text-sm mb-2">상담 가능 시간</h3>
              <p className="text-gray-600 text-sm leading-7">
                평일: 09:00 - 21:00<br />
                토요일: 09:00 - 18:00<br />
                일요일 / 공휴일: 휴무
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
