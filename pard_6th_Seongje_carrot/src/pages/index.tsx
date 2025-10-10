import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    console.log(`{http://localhost:3000/}에서 {${keyword}}을(를) 찾고 있어요!`);
  };

  return (
    <div className="w-[1440px] mx-auto bg-gray-50 overflow-hidden">
      {/* ===== Header ===== */}
      <div className="w-full py-2.5 bg-white border-b border-gray-200 flex justify-center">
        <div className="w-[1200px] h-16 flex items-center">
          {/* 로고 + GNB */}
          <div className="flex items-center">
            <img src="/images/IMG-9.png" alt="로고" className="w-[61px] h-10" />
            <nav className="ml-8 h-6 flex items-center whitespace-nowrap">
              <Link
                href="/menu"
                className="text-gray-700 text-base font-medium leading-6 hover:text-orange-500 transition"
              >
                중고거래
              </Link>
              <span className="pl-6 text-gray-700 text-base font-medium leading-6">
                부동산
              </span>
              <span className="pl-6 text-gray-700 text-base font-medium leading-6">
                중고차
              </span>
              <span className="pl-6 text-gray-700 text-base font-medium leading-6">
                알바
              </span>
              <span className="pl-6 text-gray-700 text-base font-medium leading-6">
                동네업체
              </span>
              <span className="pl-6 text-gray-700 text-base font-medium leading-6">
                동네생활
              </span>
              <span className="pl-6 text-gray-700 text-base font-medium leading-6">
                모임
              </span>
            </nav>
          </div>

          {/* Right */}
          <div className="ml-auto flex items-center">
            <div className="h-6 flex items-center">
              <img src="/icons/Icon-35.svg" alt="" className="w-4 h-4" />
              <span className="ml-2 text-gray-700 text-sm leading-5">
                송도동
              </span>
              <img src="/icons/Icon-40.svg" alt="" className="ml-2 w-4 h-4" />
            </div>
            <button className="ml-4 h-10 px-4 bg-orange-500 rounded-lg text-white text-base font-medium transition-colors hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300">
              글쓰기
            </button>
          </div>
        </div>
      </div>

      {/* ===== Center / Hero ===== */}
      <section className="w-full bg-white flex justify-center">
        <div className="w-[896px] max-w-[896px] px-8 py-12">
          {/* 타이틀 */}
          <div className="w-[832px] h-9 mx-auto flex items-center justify-center">
            <img src="/icons/Icon-47.svg" alt="" className="w-8 h-8 mr-2" />
            <h1 className="text-gray-800 text-3xl font-bold leading-9">
              송도동에서 알바 찾고 계신가요?
            </h1>
          </div>

          {/* 검색줄 */}
          <div className="px-20 pt-8 flex justify-start">
            <div className="w-[672px] max-w-[672px] flex items-center">
              {/* 위치 pill (호버 포함) */}
              <button
                type="button"
                className="group h-12 px-4 rounded-full bg-gray-800 text-white
                           flex items-center transition-colors duration-200
                           hover:bg-gray-700 active:bg-gray-900
                           focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <img
                  src="/icons/Icon-53.svg"
                  alt=""
                  className="w-4 h-4 mr-2 brightness-0 invert transition-transform duration-200 group-hover:scale-110"
                />
                <span className="text-sm leading-tight">송도동</span>
                <img
                  src="/icons/Icon-58.svg"
                  alt=""
                  className="w-4 h-4 ml-2 brightness-0 invert transition-transform duration-200 group-hover:scale-110"
                />
              </button>

              {/*검색 버튼 (호버 포함) */}
              <div className="relative w-[536.02px] h-12 ml-4">
                <input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full h-full rounded-lg border border-gray-200 pl-4 pr-12
                             text-gray-800 placeholder-gray-400 text-base font-medium
                             focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="물건이름을 입력해주세요"
                  aria-label="검색어 입력"
                />
                <button
                  type="button"
                  aria-label="검색"
                  className="group absolute right-1 top-1 h-10 w-8 rounded-lg
                             bg-orange-500 flex items-center justify-center
                             transition-colors duration-200
                             hover:bg-orange-600 active:bg-orange-700
                             focus:outline-none focus:ring-2 focus:ring-orange-300"
                  onClick={handleSearch}
                >
                  <img
                    src="/icons/Icon-62.svg"
                    alt=""
                    className="w-4 h-4 brightness-0 invert transition-transform duration-200 group-hover:scale-110"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* 인기 검색어 */}
          <div className="pt-6">
            <div className="w-[832px] h-5 px-4 flex items-center gap-2 flex-wrap">
              <span className="text-gray-700 text-sm leading-tight">
                인기 검색어:
              </span>
              <span className="text-orange-500 text-sm leading-tight">
                에어팟
              </span>
              <span className="text-orange-500 text-sm leading-tight">
                에어팟3
              </span>
              <span className="text-orange-500 text-sm leading-tight">
                노트북
              </span>
              <span className="text-orange-500 text-sm leading-tight">
                원룸
              </span>
              <span className="text-orange-500 text-sm leading-tight">
                현대 중고차
              </span>
              <span className="text-orange-500 text-sm leading-tight">
                아침일감
              </span>
              <span className="text-orange-500 text-sm leading-tight">
                급식당
              </span>
              <span className="text-orange-500 text-sm leading-tight">
                배달
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1152px] max-w-[1152px] mx-auto p-8">
        <div className="pb-12">
          <div className="w-[1088px] min-h-32 flex flex-wrap gap-4">
            {[
              "중고거래",
              "알바",
              "부동산",
              "중고차",
              "동네업체",
              "동네생활",
              "모임",
            ].map((t, i) => (
              <div
                key={i}
                className="w-36 h-32 p-6 bg-white rounded-2xl flex flex-col items-center justify-start"
              >
                <div className="px-6 pb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full" />
                </div>
                {t && (
                  <div className="text-gray-700 text-sm font-medium leading-tight text-center">
                    {t}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[1088px] min-h-9 flex flex-wrap gap-3">
          {[
            "송도동",
            "역삼동",
            "홍대동",
            "협실동",
            "배광동",
            "서교동",
            "우정동",
            "신림동",
            "광당동",
            "합정동",
            "회동동",
            "다선동",
            "미금동",
            "업구장동",
            "배곡동",
            "오정동",
          ].map((d) => (
            <div
              key={d}
              className="h-9 px-4 bg-white rounded-full flex items-center text-gray-700 text-sm leading-tight"
            >
              {d}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
