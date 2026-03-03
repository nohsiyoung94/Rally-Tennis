"use client";

interface KakaoMapProps {
  className?: string;
}

export default function KakaoMap({ className = "w-full h-96" }: KakaoMapProps) {
  return (
    <iframe
      src="/kakaomap.html"
      className={`${className} rounded-lg border-0`}
      allowFullScreen
      loading="lazy"
    />
  );
}
