import Link from "next/link";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";
import MobileFilterModal from "@/components/MobileFilterModal";
import { useSearchStore } from "@/store/useSearch";

type Product = {
  id: number;
  title: string;
  color: string;
  condition: string;
  price: number;
  location: string;
  timeAgo: string;
  image: string;
  liked: boolean;
  likes: number;
};

export default function Main() {
  const { keyword } = useSearchStore();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [menuOpen, setOpenMenu] = useState(false);

   const initialProducts: Product[] = [
    {id: 1, title: "아이폰 14 프로 128GB",color: "퍼플",condition: "깨끗한 상태", price: 850000, location: "송도동", timeAgo: "몇초 전", image: "/images/sample/iphone14pro-purple.jpg", liked: false,likes: 0,},
    {id: 2, title: "아이폰 14 프로 128GB",color: "퍼플",condition: "깨끗한 상태", price: 850000, location: "송도동", timeAgo: "몇초 전", image: "/images/sample/iphone14pro-purple.jpg", liked: false,likes: 0,},
    {id: 3, title: "아이폰 14 프로 128GB",color: "퍼플",condition: "깨끗한 상태", price: 850000, location: "송도동", timeAgo: "몇초 전", image: "/images/sample/iphone14pro-purple.jpg", liked: false,likes: 0,},
    {id: 4, title: "아이폰 14 프로 128GB",color: "퍼플",condition: "깨끗한 상태", price: 850000, location: "송도동", timeAgo: "몇초 전", image: "/images/sample/iphone14pro-purple.jpg", liked: false,likes: 0,},
    {id: 5, title: "아이폰 14 프로 128GB",color: "퍼플",condition: "깨끗한 상태", price: 850000, location: "송도동", timeAgo: "몇초 전", image: "/images/sample/iphone14pro-purple.jpg", liked: false,likes: 0,},
    {id: 6, title: "아이폰 14 프로 128GB",color: "퍼플",condition: "깨끗한 상태", price: 850000, location: "송도동", timeAgo: "몇초 전", image: "/images/sample/iphone14pro-purple.jpg", liked: false,likes: 0,},
    {id: 7, title: "아이폰 14 프로 128GB",color: "퍼플",condition: "깨끗한 상태", price: 850000, location: "송도동", timeAgo: "몇초 전", image: "/images/sample/iphone14pro-purple.jpg", liked: false,likes: 0,},
  ];

  // 상품 상태(배열)로 관리 — 각 상품이 독립적으로 하트/개수를 가짐
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [openId, setOpenId] = useState<number | null>(null);
  const selected =
    openId !== null ? products.find((p) => p.id === openId) : null;

  // 상품별 좋아요 토글
  function handleLike(idx: number) {
    setProducts((prev) =>
      prev.map((p, i) =>
        i === idx
          ? {
              ...p,
              liked: !p.liked,
              likes: p.liked ? p.likes - 1 : p.likes + 1,
            }
          : p
      )
    );
  }

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* 헤더 */}
      <header className="w-full border-b border-gray-200">
        <div className="mx-auto max-w-[1200px] h-16 flex items-center justify-between px-4">
          {/* 좌측: 로고 + 데스크톱 메뉴 */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/IMG-9.png"
                alt="로고"
                className="w-[61px] h-10"
              />
            </Link>

            {/* 데스크톱/태블릿: 메뉴 노출, 모바일: 숨김 */}
            <nav className="ml-8 h-6 items-center whitespace-nowrap hidden md:flex">
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

          {/* 우측: 데스크톱은 위치+글쓰기, 모바일은 햄버거 */}
          <div className="flex items-center">
            {/* 모바일: 햄버거 + 위치(아이콘) */}
            <button
              className="md:hidden p-2 flex items-center text-[15px] font-medium text-gray-800"
              aria-label="현재 위치"
            >
              <img src="/icons/Icon-35.svg" className="size-4 mr-1" alt="" />
              <span className="text-gray-700 text-sm leading-5">송도동</span>
            </button>

            <button
              className="md:hidden p-2"
              aria-label="메뉴"
              onClick={() => setOpenMenu(true)}
            >
              <img src="/icons/hamburger.svg" className="size-5" alt="" />
            </button>

            {/* 데스크톱/태블릿: 기존 버튼 유지 */}
            <div className="hidden md:flex items-center">
              <button
                type="button"
                className="flex items-center text-sm text-gray-700"
              >
                <img
                  src="/icons/Icon-35.svg"
                  alt=""
                  aria-hidden
                  className="size-4 mr-2"
                />
                송도동
                <img
                  src="/icons/Icon-40.svg"
                  alt=""
                  aria-hidden
                  className="size-4 ml-1"
                />
              </button>
              <button
                type="button"
                className="ml-4 px-4 py-2 bg-orange-500 text-white text-base font-medium rounded-lg"
              >
                글쓰기
              </button>
            </div>
          </div>
        </div>

        {/* 검색바 */}
        <div className="w-full">
          <div className="mx-auto max-w-[1200px] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-12 md:h-14 bg-white rounded-lg border border-gray-200 pl-3 pr-2 flex items-center">
                <input
                  type="text"
                  placeholder="물건이름을 입력해주세요"
                  className="w-full placeholder:text-gray-400 text-sm md:text-base outline-none"
                />
                <button
                  type="button"
                  className="ml-2 w-9 h-9 md:w-10 md:h-10 bg-orange-500 rounded-lg grid place-items-center"
                  aria-label="검색"
                >
                  <img
                    src="/icons/Icon-62.svg"
                    alt=""
                    aria-hidden
                    className="size-4"
                  />
                </button>
              </div>

              {/* 위치 선택: 모바일 숨김 */}
              <button
                type="button"
                className="hidden md:flex h-10 px-3 items-center text-gray-700"
              >
                <img
                  src="/icons/Icon-35.svg"
                  alt=""
                  aria-hidden
                  className="size-4 mr-2"
                />
                송도동
                <img
                  src="/icons/Icon-40.svg"
                  alt=""
                  aria-hidden
                  className="size-4 ml-1"
                />
              </button>
            </div>

            {/* 추천 태그: 모바일 가로 스크롤 */}
            <div className="mt-2 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
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
                  className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700 shrink-0"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 본문 */}
      <main className="mx-auto max-w-[1200px] px-4 py-6 grid grid-cols-12 gap-6">
        {/* 왼쪽 사이드바 */}
        <aside className="hidden md:block md:col-span-3">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900">필터</h2>
              <button className="text-sm text-orange-500">초기화</button>
            </div>

            <label className="mt-3 flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" className="size-4" />
              거래 가능만 보기
            </label>

            <div className="mt-5">
              <div className="text-base font-medium text-gray-900">위치</div>
              <div className="mt-1 text-sm text-gray-600">
                인천광역시 연수구
              </div>

              <ul className="mt-2 max-h-48 overflow-auto space-y-2 text-sm text-gray-700">
                {[
                  "송도동",
                  "송도1동",
                  "송도2동",
                  "연수동",
                  "동춘동",
                  "청학동",
                ].map((dong, i) => (
                  <li key={dong} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="dong"
                      defaultChecked={i === 0}
                      className="size-4"
                    />
                    {dong}
                  </li>
                ))}
              </ul>

              <button className="mt-2 text-sm text-orange-500">더보기</button>
            </div>
          </div>
        </aside>

        {/* 상품 리스트 */}
        <section className="col-span-12 md:col-span-9">
          <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{keyword}</h2>
          <button
            className="md:hidden inline-flex items-center gap-1 rounded-full bg-gray-400 px-3 py-1 text-white"
            onClick={() => setIsFilterOpen(true)}
            aria-label="필터 열기"
          >
            <span className="text-sm">필터</span>
            <img src="/icons/Icon-40.svg" className="w-3.5 h-3.5" alt="" />
          </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {products.map((p, idx) => (
              <article
                key={p.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                {/* 썸네일 영역 — 기존 높이 유지 */}
                <div className="h-44 bg-orange-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-3 py-2">
                  <h3 className="text-base font-medium text-gray-900 line-clamp-2">
                    {p.title}
                  </h3>
                  <h3 className="text-base font-medium text-gray-900 line-clamp-2">
                    {p.color} {p.condition}
                  </h3>

                  <div className="mt-1 text-xl font-bold text-gray-900">
                    {p.price.toLocaleString()}원
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {p.location} • {p.timeAgo}
                  </div>
                </div>

                <div className="px-3 py-2 flex justify-end items-center gap-2">
                  {/* 하트표시 (상품별 독립 상태) */}
                  <img
                    onClick={() => handleLike(idx)}
                    src={p.liked ? "/icons/heart.svg" : "/icons/Icon-187.svg"}
                    alt="좋아요"
                    aria-hidden="true"
                    className="w-5 h-4 cursor-pointer"
                  />
                  <div className="text-black">{p.likes}</div>
                  <button
                    className="px-3 py-1.5 bg-orange-500 text-white text-xs font-medium rounded-lg"
                    onClick={() => setOpenId(p.id)}
                  >
                    자세히
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      {selected && (
        <ProductModal
          open
          onClose={() => setOpenId(null)}
        />
      )}
      {/* 드로어 */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* 어둡게: 배경 클릭하면 닫힘 */}
          <button
            aria-label="메뉴 닫기"
            onClick={() => setOpenMenu(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* 우측 패널 */}
          <aside
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-72 bg-gray-50 shadow-[0_0_20px_rgba(0,0,0,0.25)]
                 translate-x-0 transition-transform duration-300 overflow-y-auto"
          >
            {/* 상단 닫기 */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setOpenMenu(false)}
                aria-label="메뉴 닫기"
                className="text-gray-700"
              >
                <span className="text-lg tracking-widest">|||</span>
              </button>
            </div>

            {/* 메뉴 리스트 */}
            <nav className="px-8">
              <ul className="space-y-5 text-gray-700 text-[18px] leading-normal">
                <li>
                  <button className="hover:text-gray-900">중고거래</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">부동산</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">중고차</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">알바</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">동네업체</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">동네생활</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">모임</button>
                </li>
              </ul>

              {/* 글쓰기 버튼 */}
              <div className="mt-8 flex justify-center">
                <button className="px-5 py-2 rounded-md bg-orange-500 text-white text-[15px]">
                  글쓰기
                </button>
              </div>
            </nav>
            <div className="h-6" />
          </aside>
        </div>
      )}
      <MobileFilterModal open={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  );
}
