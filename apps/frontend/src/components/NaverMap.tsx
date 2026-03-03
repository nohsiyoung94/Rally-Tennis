"use client";

interface NaverMapProps {
  className?: string;
}

export default function NaverMap({ className = "w-full h-96" }: NaverMapProps) {
  return (
    <iframe
      src="https://map.naver.com/p/search/랠리테니스스튜디오"
      className={`${className} rounded-lg border-0`}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
