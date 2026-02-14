# 랠리테니스 홈페이지

랠리테니스 클럽 홈페이지 모노레포 프로젝트

## 프로젝트 구조

| 서비스 | 기술 스택 | 포트 |
|--------|-----------|------|
| Frontend | Next.js 14 + TypeScript | 3000 |
| CMS | Next.js 14 + TypeScript | 3001 |
| Backend | 미정 | 4000 |

## 실행 방법

```bash
# Docker Compose로 전체 서비스 실행
docker-compose up --build

# 개별 서비스 실행
docker-compose up frontend
docker-compose up cms
```

## 로컬 개발

```bash
# Frontend
cd frontend && npm install && npm run dev

# CMS
cd cms && npm install && npm run dev
```

## 주요 기능

### Frontend (사용자 페이지)
- 클럽 소개
- 코트/시설 안내
- 레슨 프로그램 안내
- 예약 시스템
- 오시는 길 / 연락처

### CMS (관리자 페이지)
- 관리자 로그인
- 콘텐츠 관리
- 예약 관리 대시보드
