"use client";

import { useState } from "react";
import { members } from "@/data/mock";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Table, { Column } from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Modal from "@/components/ui/Modal";
import type { Member } from "@/types";

const statusVariant: Record<string, "success" | "warning" | "danger"> = {
  활성: "success",
  만료: "warning",
  정지: "danger",
};

const columns: Column<Member>[] = [
  { key: "id", label: "회원번호" },
  { key: "name", label: "이름" },
  { key: "phone", label: "연락처" },
  { key: "membershipType", label: "회원권", render: (item) => <Badge variant="info">{item.membershipType}</Badge> },
  {
    key: "status",
    label: "상태",
    render: (item) => <Badge variant={statusVariant[item.status]}>{item.status}</Badge>,
  },
  { key: "joinDate", label: "가입일" },
  { key: "lastVisit", label: "최근 방문" },
  {
    key: "lessonsRemaining",
    label: "잔여 레슨",
    render: (item) => <span>{item.lessonsRemaining ?? "-"}</span>,
  },
];

const PAGE_SIZE = 5;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  membershipType: "월간" as Member["membershipType"],
  lessonsRemaining: "",
};

export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("전체");
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [memberList, setMemberList] = useState<Member[]>(members);

  const filtered = memberList.filter((m) => {
    if (statusFilter !== "전체" && m.status !== statusFilter) return false;
    if (search && !m.name.includes(search) && !m.phone.includes(search) && !m.email.includes(search)) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleOpenModal = () => {
    setForm(initialForm);
    setModalOpen(true);
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;

    const today = new Date().toISOString().slice(0, 10);
    const newMember: Member = {
      id: `M${String(memberList.length + 1).padStart(3, "0")}`,
      name: form.name,
      email: form.email,
      phone: form.phone,
      membershipType: form.membershipType,
      status: "활성",
      joinDate: today,
      lastVisit: today,
      lessonsRemaining: form.lessonsRemaining ? Number(form.lessonsRemaining) : undefined,
    };

    setMemberList([newMember, ...memberList]);
    setModalOpen(false);
    setPage(1);
  };

  return (
    <>
      <PageHeader
        title="회원 관리"
        description={`총 ${memberList.length}명의 회원`}
        action={<Button onClick={handleOpenModal}>+ 회원 등록</Button>}
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="w-64">
          <Input
            placeholder="이름, 연락처, 이메일 검색"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>
        <div className="w-36">
          <Select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
            options={[
              { value: "전체", label: "상태: 전체" },
              { value: "활성", label: "활성" },
              { value: "만료", label: "만료" },
              { value: "정지", label: "정지" },
            ]}
          />
        </div>
      </div>

      <Card noPadding>
        <Table columns={columns} data={paginated} />
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <Button
            variant="ghost"
            size="sm"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            이전
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                page === i + 1
                  ? "bg-accent text-white"
                  : "text-text-muted hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
          >
            다음
          </Button>
        </div>
      )}

      {/* 회원 등록 모달 */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="회원 등록"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>취소</Button>
            <Button onClick={handleSubmit}>등록</Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input
            label="이름 *"
            placeholder="홍길동"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            label="연락처 *"
            placeholder="010-0000-0000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <Input
            label="이메일"
            type="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Select
            label="회원권 유형"
            value={form.membershipType}
            onChange={(e) => setForm({ ...form, membershipType: e.target.value as Member["membershipType"] })}
            options={[
              { value: "월간", label: "월간" },
              { value: "분기", label: "분기" },
              { value: "연간", label: "연간" },
              { value: "회당", label: "회당" },
            ]}
          />
          <Input
            label="레슨 횟수"
            type="number"
            placeholder="0"
            value={form.lessonsRemaining}
            onChange={(e) => setForm({ ...form, lessonsRemaining: e.target.value })}
          />
        </div>
      </Modal>
    </>
  );
}
