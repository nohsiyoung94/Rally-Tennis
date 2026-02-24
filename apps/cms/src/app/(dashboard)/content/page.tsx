"use client";

import { useState } from "react";
import { contentPages, notices } from "@/data/mock";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Table, { Column } from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { ContentPage, Notice } from "@/types";

const pageColumns: Column<ContentPage>[] = [
  { key: "title", label: "페이지 제목" },
  { key: "slug", label: "경로", render: (item) => <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">{item.slug}</code> },
  {
    key: "status",
    label: "상태",
    render: (item) => (
      <Badge variant={item.status === "게시중" ? "success" : item.status === "임시저장" ? "warning" : "neutral"}>
        {item.status}
      </Badge>
    ),
  },
  { key: "lastModified", label: "최종 수정" },
  { key: "author", label: "작성자" },
];

const noticeColumns: Column<Notice>[] = [
  { key: "title", label: "제목" },
  {
    key: "category",
    label: "분류",
    render: (item) => (
      <Badge variant={item.category === "공지" ? "info" : item.category === "이벤트" ? "success" : item.category === "점검" ? "warning" : "neutral"}>
        {item.category}
      </Badge>
    ),
  },
  {
    key: "status",
    label: "상태",
    render: (item) => (
      <Badge variant={item.status === "게시중" ? "success" : item.status === "예약" ? "warning" : "neutral"}>
        {item.status}
      </Badge>
    ),
  },
  { key: "createdAt", label: "작성일" },
  { key: "views", label: "조회수", render: (item) => <span>{item.views.toLocaleString()}</span> },
];

export default function ContentManagementPage() {
  const [tab, setTab] = useState<"pages" | "notices">("pages");

  return (
    <>
      <PageHeader
        title="콘텐츠 관리"
        description="웹사이트 페이지와 공지사항을 관리합니다"
        action={<Button>+ 새 콘텐츠</Button>}
      />

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 rounded-lg p-1 w-fit">
        <button
          onClick={() => setTab("pages")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
            tab === "pages" ? "bg-white text-text-primary shadow-sm" : "text-text-muted hover:text-text-primary"
          }`}
        >
          페이지 관리
        </button>
        <button
          onClick={() => setTab("notices")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
            tab === "notices" ? "bg-white text-text-primary shadow-sm" : "text-text-muted hover:text-text-primary"
          }`}
        >
          공지사항
        </button>
      </div>

      <Card noPadding>
        {tab === "pages" ? (
          <Table columns={pageColumns} data={contentPages } />
        ) : (
          <Table columns={noticeColumns} data={notices } />
        )}
      </Card>
    </>
  );
}
