"use client";

import { useState } from "react";
import { reservations } from "@/data/mock";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Table, { Column } from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import type { Reservation } from "@/types";

const statusVariant: Record<string, "success" | "warning" | "danger" | "neutral"> = {
  확정: "success",
  대기: "warning",
  취소: "danger",
  완료: "neutral",
};

const columns: Column<Reservation>[] = [
  { key: "id", label: "예약번호" },
  { key: "memberName", label: "회원명" },
  { key: "coachName", label: "코치" },
  { key: "court", label: "코트" },
  { key: "date", label: "날짜" },
  { key: "time", label: "시간" },
  { key: "type", label: "유형", render: (item) => <Badge variant="info">{item.type}</Badge> },
  {
    key: "status",
    label: "상태",
    render: (item) => <Badge variant={statusVariant[item.status]}>{item.status}</Badge>,
  },
];

export default function ReservationsPage() {
  const [statusFilter, setStatusFilter] = useState("전체");
  const [typeFilter, setTypeFilter] = useState("전체");
  const [search, setSearch] = useState("");

  const filtered = reservations.filter((r) => {
    if (statusFilter !== "전체" && r.status !== statusFilter) return false;
    if (typeFilter !== "전체" && r.type !== typeFilter) return false;
    if (search && !r.memberName.includes(search) && !r.coachName.includes(search)) return false;
    return true;
  });

  return (
    <>
      <PageHeader
        title="예약 관리"
        description="코트 예약과 레슨 예약을 관리합니다"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="w-48">
          <Input
            placeholder="회원 또는 코치 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-36">
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            options={[
              { value: "전체", label: "상태: 전체" },
              { value: "확정", label: "확정" },
              { value: "대기", label: "대기" },
              { value: "취소", label: "취소" },
              { value: "완료", label: "완료" },
            ]}
          />
        </div>
        <div className="w-36">
          <Select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            options={[
              { value: "전체", label: "유형: 전체" },
              { value: "개인레슨", label: "개인레슨" },
              { value: "그룹레슨", label: "그룹레슨" },
              { value: "코트대여", label: "코트대여" },
              { value: "자유연습", label: "자유연습" },
            ]}
          />
        </div>
      </div>

      <Card noPadding>
        <Table columns={columns} data={filtered } />
      </Card>

      <p className="text-sm text-text-muted mt-4">총 {filtered.length}건의 예약</p>
    </>
  );
}
