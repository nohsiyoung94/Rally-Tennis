"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("로그인 기능은 백엔드 연동 후 활성화됩니다.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-content-bg">
      <div className="w-full max-w-sm mx-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-4xl">🎾</span>
          <h1 className="text-2xl font-bold text-text-primary mt-3">랠리테니스 CMS</h1>
          <p className="text-sm text-text-muted mt-1">관리자 계정으로 로그인하세요</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg border border-border"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
              이메일
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@rallytennis.kr"
              className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-1.5">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-sidebar text-white rounded-lg font-medium hover:bg-sidebar-hover transition-colors cursor-pointer"
          >
            로그인
          </button>
        </form>

        <p className="text-center text-xs text-text-muted mt-6">
          © 2026 랠리테니스 아카데미
        </p>
      </div>
    </div>
  );
}
