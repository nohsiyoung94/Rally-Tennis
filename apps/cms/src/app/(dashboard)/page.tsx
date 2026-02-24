import { dashboardStats } from "@/data/mock";

import PageHeader from "@/components/ui/PageHeader";

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="대시보드" description="랠리테니스 운영 현황을 한눈에 확인하세요" />

      {/* Stats Grid */}

      {/* Charts + Activity Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

      </div>

      {/* Reservations + Lessons Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      </div>
    </>
  );
}
