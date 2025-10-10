import Link from "next/link";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";

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
  const initialProducts: Product[] = [
    {
      id: 1,
      title: "아이폰 14 프로 128GB",
      color: "퍼플",
      condition: "깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeAgo: "몇초 전",
      image: "/images/sample/iphone14pro-purple.jpg",
      liked: false,
      likes: 0,
    },
    {
      id: 2,
      title: "아이폰 14 프로 128GB",
      color: "퍼플",
      condition: "깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeAgo: "몇초 전",
      image: "/images/sample/iphone14pro-purple.jpg",
      liked: false,
      likes: 1,
    },
    {
      id: 3,
      title: "아이폰 14 프로 128GB",
      color: "퍼플",
      condition: "깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeAgo: "몇초 전",
      image: "/images/sample/iphone14pro-purple.jpg",
      liked: false,
      likes: 2,
    },
    {
      id: 4,
      title: "아이폰 14 프로 128GB",
      color: "퍼플",
      condition: "깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeAgo: "몇초 전",
      image: "/images/sample/iphone14pro-purple.jpg",
      liked: false,
      likes: 3,
    },
    {
      id: 5,
      title: "아이폰 14 프로 128GB",
      color: "퍼플",
      condition: "깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeAgo: "몇초 전",
      image: "/images/sample/iphone14pro-purple.jpg",
      liked: false,
      likes: 4,
    },
    {
      id: 6,
      title: "아이폰 14 프로 128GB",
      color: "퍼플",
      condition: "깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeAgo: "몇초 전",
      image: "/images/sample/iphone14pro-purple.jpg",
      liked: false,
      likes: 5,
    },
    {
      id: 7,
      title: "아이폰 14 프로 128GB",
      color: "퍼플",
      condition: "깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeAgo: "몇초 전",
      image: "/images/sample/iphone14pro-purple.jpg",
      liked: false,
      likes: 6,
    },
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
    <div className="w-full bg-white">
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
              className="ml-4 px-4 py-2 bg-orange-500 text-white text-base font-medium rounded-lg"
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

      {/* 본문 */}
      <main className="mx-auto max-w-[1200px] px-4 py-6 grid grid-cols-12 gap-6">
        {/* 왼쪽 사이드바 */}
        <aside className="col-span-12 md:col-span-3">
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">전체 상품</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
          onClose={() => setOpenId(null)} // 닫기 함수
        />
      )}
    </div>
  );
}
