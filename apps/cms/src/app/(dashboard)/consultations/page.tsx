"use client";

import { useState } from "react";
import { consultations as initialData } from "@/data/mock";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Modal from "@/components/ui/Modal";
import type { Consultation } from "@/types";

const statusVariant: Record<Consultation["status"], "danger" | "info" | "success" | "warning"> = {
  신규: "danger",
  확인: "info",
  상담완료: "success",
  보류: "warning",
};

const typeVariant: Record<string, "info" | "success" | "warning" | "neutral"> = {
  "레슨 상담": "info",
  "단체 레슨 문의": "success",
  "시설 이용 문의": "warning",
  "일반 문의": "neutral",
  "기타": "neutral",
};

export default function ConsultationsPage() {
  const [list, setList] = useState<Consultation[]>(initialData);
  const [statusFilter, setStatusFilter] = useState("전체");
  const [typeFilter, setTypeFilter] = useState("전체");
  const [search, setSearch] = useState("");

  // detail modal
  const [selected, setSelected] = useState<Consultation | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [note, setNote] = useState("");

  const filtered = list.filter((c) => {
    if (statusFilter !== "전체" && c.status !== statusFilter) return false;
    if (typeFilter !== "전체" && c.type !== typeFilter) return false;
    if (search && !c.name.includes(search) && !c.phone.includes(search)) return false;
    return true;
  });

  const newCount = list.filter((c) => c.status === "신규").length;

  const handleOpen = (item: Consultation) => {
    setSelected(item);
    setNote(item.note || "");
    setDetailOpen(true);
  };

  const handleStatusChange = (newStatus: Consultation["status"]) => {
    if (!selected) return;
    setList((prev) =>
      prev.map((c) =>
        c.id === selected.id ? { ...c, status: newStatus, note: note || c.note } : c
      )
    );
    setSelected({ ...selected, status: newStatus, note: note || selected.note });
  };

  const handleSaveNote = () => {
    if (!selected) return;
    setList((prev) =>
      prev.map((c) => (c.id === selected.id ? { ...c, note } : c))
    );
    setSelected({ ...selected, note });
  };

  return (
    <>
      <PageHeader
        title="상담문의 관리"
        description={`총 ${list.length}건${newCount > 0 ? ` · 신규 ${newCount}건` : ""}`}
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="w-56">
          <Input
            placeholder="이름, 연락처 검색"
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
              { value: "신규", label: "신규" },
              { value: "확인", label: "확인" },
              { value: "상담완료", label: "상담완료" },
              { value: "보류", label: "보류" },
            ]}
          />
        </div>
        <div className="w-44">
          <Select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            options={[
              { value: "전체", label: "유형: 전체" },
              { value: "레슨 상담", label: "레슨 상담" },
              { value: "단체 레슨 문의", label: "단체 레슨 문의" },
              { value: "시설 이용 문의", label: "시설 이용 문의" },
              { value: "일반 문의", label: "일반 문의" },
              { value: "기타", label: "기타" },
            ]}
          />
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {filtered.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <div
              className="flex items-start justify-between cursor-pointer"
              onClick={() => handleOpen(item)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-text-primary">{item.name}</span>
                  <Badge variant={statusVariant[item.status]}>{item.status}</Badge>
                  <Badge variant={typeVariant[item.type] || "neutral"}>{item.type}</Badge>
                </div>
                <p className="text-sm text-text-secondary line-clamp-1">{item.message}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-text-muted">
                  <span>{item.phone}</span>
                  {item.email && <span>{item.email}</span>}
                  <span>{item.createdAt}</span>
                </div>
              </div>
              <svg className="w-5 h-5 text-text-muted flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Card>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            <p className="text-lg mb-1">검색 결과가 없습니다</p>
            <p className="text-sm">필터 조건을 변경해보세요</p>
          </div>
        )}
      </div>

      <p className="text-sm text-text-muted mt-4">총 {filtered.length}건</p>

      {/* Detail Modal */}
      <Modal
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        title="상담문의 상세"
        footer={
          <Button variant="secondary" onClick={() => setDetailOpen(false)}>닫기</Button>
        }
      >
        {selected && (
          <div className="space-y-5">
            {/* Info */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-text-muted mb-0.5">이름</p>
                <p className="font-medium">{selected.name}</p>
              </div>
              <div>
                <p className="text-text-muted mb-0.5">연락처</p>
                <p className="font-medium">{selected.phone}</p>
              </div>
              <div>
                <p className="text-text-muted mb-0.5">이메일</p>
                <p className="font-medium">{selected.email || "-"}</p>
              </div>
              <div>
                <p className="text-text-muted mb-0.5">접수일시</p>
                <p className="font-medium">{selected.createdAt}</p>
              </div>
              <div>
                <p className="text-text-muted mb-0.5">문의 유형</p>
                <Badge variant={typeVariant[selected.type] || "neutral"}>{selected.type}</Badge>
              </div>
              <div>
                <p className="text-text-muted mb-0.5">현재 상태</p>
                <Badge variant={statusVariant[selected.status]}>{selected.status}</Badge>
              </div>
            </div>

            {/* Message */}
            <div>
              <p className="text-sm text-text-muted mb-1">문의 내용</p>
              <div className="p-3 bg-content-bg rounded-lg text-sm leading-relaxed">
                {selected.message}
              </div>
            </div>

            {/* Status change */}
            <div>
              <p className="text-sm text-text-muted mb-2">상태 변경</p>
              <div className="flex gap-2">
                {(["신규", "확인", "상담완료", "보류"] as Consultation["status"][]).map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStatusChange(s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                      selected.status === s
                        ? "bg-accent text-white border-accent"
                        : "bg-white text-text-secondary border-border hover:bg-gray-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Note */}
            <div>
              <p className="text-sm text-text-muted mb-1">관리자 메모</p>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="상담 내용, 후속 조치 등을 메모하세요"
                rows={3}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-y"
              />
              <Button size="sm" className="mt-2" onClick={handleSaveNote}>
                메모 저장
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
