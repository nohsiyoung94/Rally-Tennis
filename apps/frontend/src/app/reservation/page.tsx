"use client";

import { useState } from "react";

export default function ReservationPage() {
  const [form, setForm] = useState({ name: "", phone: "", court: "A코트", date: "", time: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("예약 기능은 백엔드 연동 후 활성화됩니다.");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>예약하기</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label>
          이름
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            style={inputStyle}
          />
        </label>
        <label>
          연락처
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            style={inputStyle}
          />
        </label>
        <label>
          코트 선택
          <select
            value={form.court}
            onChange={(e) => setForm({ ...form, court: e.target.value })}
            style={inputStyle}
          >
            <option>A코트</option>
            <option>B코트</option>
            <option>C코트</option>
            <option>D코트</option>
          </select>
        </label>
        <label>
          날짜
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
            style={inputStyle}
          />
        </label>
        <label>
          시간
          <input
            type="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            required
            style={inputStyle}
          />
        </label>
        <button
          type="submit"
          style={{ padding: "0.75rem", backgroundColor: "#2563eb", color: "#fff", border: "none", borderRadius: 8, fontSize: "1rem", cursor: "pointer" }}
        >
          예약 신청
        </button>
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "0.5rem",
  marginTop: "0.25rem",
  border: "1px solid #ccc",
  borderRadius: 6,
  fontSize: "1rem",
  boxSizing: "border-box",
};
