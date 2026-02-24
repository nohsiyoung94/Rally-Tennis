"use client";

import { useState } from "react";
import { businessHours, adminUsers } from "@/data/mock";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Table, { Column } from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import type { AdminUser } from "@/types";

const adminColumns: Column<AdminUser>[] = [
  { key: "name", label: "이름" },
  { key: "email", label: "이메일" },
  {
    key: "role",
    label: "권한",
    render: (item) => (
      <Badge variant={item.role === "최고관리자" ? "danger" : item.role === "관리자" ? "info" : "neutral"}>
        {item.role}
      </Badge>
    ),
  },
  { key: "lastLogin", label: "최근 로그인" },
  {
    key: "status",
    label: "상태",
    render: (item) => (
      <Badge variant={item.status === "활성" ? "success" : "neutral"}>{item.status}</Badge>
    ),
  },
];

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    reservation: true,
    payment: true,
    member: false,
    system: true,
  });

  return (
    <>
      <PageHeader title="설정" description="시스템 설정을 관리합니다" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Business Hours */}
        <Card title="운영 시간">
          <div className="space-y-3">
            {businessHours.map((bh) => (
              <div key={bh.day} className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-primary w-20">{bh.day}</span>
                {bh.isHoliday ? (
                  <Badge variant="warning">공휴일 운영</Badge>
                ) : null}
                <span className="text-sm text-text-secondary">
                  {bh.open} ~ {bh.close}
                </span>
              </div>
            ))}
          </div>
          <Button variant="secondary" size="sm" className="mt-4">
            운영시간 수정
          </Button>
        </Card>

        {/* Basic Info */}
        <Card title="기본 정보">
          <div className="space-y-4">
            <Input label="아카데미명" defaultValue="랠리테니스 아카데미" />
            <Input label="대표 전화" defaultValue="02-1234-5678" />
            <Input label="주소" defaultValue="서울특별시 강남구 테니스로 123" />
            <Input label="이메일" defaultValue="info@rallytennis.kr" />
          </div>
          <Button size="sm" className="mt-4">저장</Button>
        </Card>

        {/* Notification Settings */}
        <Card title="알림 설정">
          <div className="space-y-4">
            {[
              { key: "reservation" as const, label: "예약 알림", desc: "새 예약/취소 시 알림" },
              { key: "payment" as const, label: "결제 알림", desc: "결제 완료 시 알림" },
              { key: "member" as const, label: "회원 알림", desc: "신규 가입/만료 시 알림" },
              { key: "system" as const, label: "시스템 알림", desc: "시스템 점검/업데이트 알림" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-primary">{item.label}</p>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
                <button
                  onClick={() =>
                    setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key] }))
                  }
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${notifications[item.key] ? "bg-accent" : "bg-gray-300"
                    }`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${notifications[item.key] ? "translate-x-5.5" : "translate-x-0.5"
                      }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Admin Users */}
        <Card title="관리자 계정" noPadding action={<Button size="sm">+ 관리자 추가</Button>}>
          <Table columns={adminColumns} data={adminUsers} />
        </Card>
      </div>
    </>
  );
}
