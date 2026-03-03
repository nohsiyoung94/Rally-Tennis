"use client";

import { useState } from "react";
import { scheduleSlots, coaches } from "@/data/mock";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Modal from "@/components/ui/Modal";
import type { ScheduleSlot } from "@/types";

const days = ["월", "화", "수", "목", "금", "토"];
const times = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];
const courts = ["메인코트"];

const typeColors: Record<string, string> = {
  개인레슨: "bg-info-bg border-info text-info",
  그룹레슨: "bg-success-bg border-success text-success",
  코트대여: "bg-warning-bg border-warning text-warning",
  점검: "bg-danger-bg border-danger text-danger",
  비어있음: "bg-gray-50 border-gray-200 text-text-muted",
};

const slotTypes: ScheduleSlot["type"][] = ["개인레슨", "그룹레슨", "코트대여", "점검"];

const initialForm = {
  day: "월",
  time: "09:00",
  court: "메인코트",
  type: "개인레슨" as ScheduleSlot["type"],
  coachName: "",
  memberName: "",
};

export default function SchedulePage() {
  const [slots, setSlots] = useState<ScheduleSlot[]>(scheduleSlots);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [selectedCourt, setSelectedCourt] = useState("전체");

  // detail / delete
  const [detailSlot, setDetailSlot] = useState<ScheduleSlot | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const getSlot = (day: string, time: string) =>
    slots.find(
      (s) =>
        s.day === day &&
        s.time === time &&
        (selectedCourt === "전체" || s.court === selectedCourt) &&
        s.type !== "비어있음"
    );

  const handleOpenModal = (day?: string, time?: string) => {
    setForm({
      ...initialForm,
      day: day || "월",
      time: time || "09:00",
    });
    setModalOpen(true);
  };

  const handleSubmit = () => {
    if (!form.day || !form.time || !form.court) return;

    const newSlot: ScheduleSlot = {
      id: `S${String(slots.length + 1).padStart(3, "0")}`,
      day: form.day,
      time: form.time,
      court: form.court,
      type: form.type,
      coachName: form.coachName || undefined,
      memberName: form.memberName || undefined,
    };

    setSlots([...slots, newSlot]);
    setModalOpen(false);
  };

  const handleSlotClick = (slot: ScheduleSlot) => {
    setDetailSlot(slot);
    setConfirmDelete(false);
    setDetailOpen(true);
  };

  const handleDelete = () => {
    if (!detailSlot) return;
    setSlots((prev) => prev.filter((s) => s.id !== detailSlot.id));
    setDetailOpen(false);
    setDetailSlot(null);
  };

  const activeCoaches = coaches.filter((c) => c.status === "활동중");

  return (
    <>
      <PageHeader
        title="스케줄 관리"
        description="주간 코트 시간표를 관리합니다"
        action={<Button onClick={() => handleOpenModal()}>+ 스케줄 추가</Button>}
      />

      <Card noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left font-medium text-text-muted w-20">시간</th>
                {days.map((day) => (
                  <th key={day} className="px-4 py-3 text-center font-medium text-text-muted">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.map((time) => (
                <tr key={time} className="border-b border-border-light">
                  <td className="px-4 py-3 font-medium text-text-muted">{time}</td>
                  {days.map((day) => {
                    const slot = getSlot(day, time);
                    if (!slot) {
                      return (
                        <td key={day} className="px-2 py-2">
                          <button
                            onClick={() => handleOpenModal(day, time)}
                            className="w-full h-16 rounded-lg border border-dashed border-gray-200 flex items-center justify-center text-xs text-text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors cursor-pointer bg-transparent"
                          >
                            + 추가
                          </button>
                        </td>
                      );
                    }
                    return (
                      <td key={day} className="px-2 py-2">
                        <button
                          onClick={() => handleSlotClick(slot)}
                          className={`w-full h-16 rounded-lg border p-2 flex flex-col justify-center text-left cursor-pointer hover:opacity-80 transition-opacity ${typeColors[slot.type]}`}
                        >
                          <p className="text-xs font-medium truncate">
                            {slot.type}
                          </p>
                          {slot.coachName && (
                            <p className="text-xs truncate opacity-80">{slot.coachName}</p>
                          )}
                          {slot.memberName && (
                            <p className="text-xs truncate opacity-60">{slot.memberName}</p>
                          )}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4">
        {Object.entries(typeColors).map(([type, cls]) => (
          <div key={type} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded border ${cls}`} />
            <span className="text-xs text-text-muted">{type}</span>
          </div>
        ))}
      </div>

      {/* 스케줄 상세/삭제 모달 */}
      <Modal
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        title="스케줄 상세"
        footer={
          !confirmDelete ? (
            <>
              <Button variant="danger" onClick={() => setConfirmDelete(true)}>삭제</Button>
              <Button variant="secondary" onClick={() => setDetailOpen(false)}>닫기</Button>
            </>
          ) : (
            <>
              <Button variant="secondary" onClick={() => setConfirmDelete(false)}>취소</Button>
              <Button variant="danger" onClick={handleDelete}>삭제 확인</Button>
            </>
          )
        }
      >
        {detailSlot && (
          <div className="space-y-4">
            {confirmDelete && (
              <div className="p-3 bg-danger-bg border border-danger/20 rounded-lg text-sm text-danger">
                이 스케줄을 정말 삭제하시겠습니까?
              </div>
            )}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-text-muted mb-0.5">요일</p>
                <p className="font-medium">{detailSlot.day}요일</p>
              </div>
              <div>
                <p className="text-text-muted mb-0.5">시간</p>
                <p className="font-medium">{detailSlot.time}</p>
              </div>
              <div>
                <p className="text-text-muted mb-0.5">코트</p>
                <p className="font-medium">{detailSlot.court}</p>
              </div>
              <div>
                <p className="text-text-muted mb-0.5">유형</p>
                <p className="font-medium">{detailSlot.type}</p>
              </div>
              {detailSlot.coachName && (
                <div>
                  <p className="text-text-muted mb-0.5">코치</p>
                  <p className="font-medium">{detailSlot.coachName}</p>
                </div>
              )}
              {detailSlot.memberName && (
                <div>
                  <p className="text-text-muted mb-0.5">회원</p>
                  <p className="font-medium">{detailSlot.memberName}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>

      {/* 스케줄 추가 모달 */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="스케줄 추가"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>취소</Button>
            <Button onClick={handleSubmit}>추가</Button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Select
              label="요일 *"
              value={form.day}
              onChange={(e) => setForm({ ...form, day: e.target.value })}
              options={days.map((d) => ({ value: d, label: `${d}요일` }))}
            />
            <Select
              label="시간 *"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              options={times.map((t) => ({ value: t, label: t }))}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-text-primary">코트</label>
            <p className="px-3 py-2 border border-border rounded-lg text-sm bg-gray-50 text-text-secondary">메인코트</p>
          </div>
          <Select
            label="유형 *"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value as ScheduleSlot["type"] })}
            options={slotTypes.map((t) => ({ value: t, label: t }))}
          />
          {form.type !== "점검" && form.type !== "코트대여" && (
            <Select
              label="코치"
              value={form.coachName}
              onChange={(e) => setForm({ ...form, coachName: e.target.value })}
              options={[
                { value: "", label: "선택 안함" },
                ...activeCoaches.map((c) => ({ value: c.name, label: `${c.name} (${c.role})` })),
              ]}
            />
          )}
          {(form.type === "개인레슨" || form.type === "코트대여") && (
            <Input
              label="회원명"
              placeholder="회원 이름 입력"
              value={form.memberName}
              onChange={(e) => setForm({ ...form, memberName: e.target.value })}
            />
          )}
        </div>
      </Modal>
    </>
  );
}
