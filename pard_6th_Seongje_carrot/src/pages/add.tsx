import Link from "next/link";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";

export default function Add() {
 const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-white">
      {/* 상단 부분 */}
      <header className="w-full border-b border-gray-200">
        <div className="mx-auto max-w-[1200px] h-16 flex items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/IMG-9.png"
                alt="로고"
                className="w-[61px] h-10"
              />
            </Link>
            <nav className="ml-8 h-6 flex items-center whitespace-nowrap">
              {[
                "중고거래",
                "부동산",
                "중고차",
                "알바",
                "동네업체",
                "동네생활",
                "모임",
              ].map((label) => (
                <span
                  key={label}
                  className="text-gray-700 text-base font-medium leading-6 ml-6 first:ml-0"
                >
                  {label}
                </span>
              ))}
            </nav>
          </div>

          {/* 위치 + 글쓰기 */}
          <div className="flex items-center">
            <button
              type="button"
              className="flex items-center text-sm text-gray-700"
            >
              <img
                src="/icons/Icon-35.svg"
                alt=""
                aria-hidden="true"
                className="size-4 mr-2"
              />
              송도동
              <img
                src="/icons/Icon-40.svg"
                alt=""
                aria-hidden="true"
                className="size-4 mr-2"
              />
            </button>

            <button
              type="button"
              className="ml-4 px-4 py-2 bg-orange-500 text-white text-base font-medium rounded-lg  hover:bg-orange-600 active:bg-orange-700
                             focus:outline-none focus:ring-2 focus:ring-orange-300"
              onClick={() => setIsOpen(true)}
            >
              글쓰기
            </button>
          </div>
        </div>

        {/* 검색 바 */}
        <div className="w-full">
          <div className="mx-auto max-w-[1200px] px-4 py-3">
            <div className="flex items-center">
              <div className="flex-1 h-14 bg-white rounded-lg border border-gray-200 pl-4 pr-2 flex items-center">
                <input
                  type="text"
                  placeholder="물건이름을 입력해주세요"
                  className="w-full placeholder:text-gray-400 text-base outline-none"
                />
                <button
                  type="button"
                  className="ml-2 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center"
                  aria-label="검색"
                >
                  <img
                    src="/icons/Icon-62.svg"
                    alt=""
                    aria-hidden="true"
                    className="size-4"
                  />
                </button>
              </div>

              {/* 위치 선택 */}
              <button
                type="button"
                className="ml-4 h-10 px-3 flex items-center text-gray-700"
              >
                <img
                  src="/icons/Icon-35.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-4 mr-2"
                />
                송도동
                <img
                  src="/icons/Icon-40.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-4 mr-2"
                />
              </button>
            </div>
            {/* 추천 태그 */}
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "#에어팟",
                "#아이폰",
                "#삼성",
                "#냉장고",
                "#자전거",
                "#노트북",
                "#의자",
                "#책상",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>
      {/* 모달 표기 */}
      {isOpen && (
        <ProductModal
          open
          onClose={() => setIsOpen(false)} // ✅ 모달 닫기
        />
      )}
    </div>
  );
}
