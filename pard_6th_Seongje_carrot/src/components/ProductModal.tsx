import { useEffect, useState } from "react";

export default function ProductModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(317);

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? Math.max(0, prev - 1) : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <div className="px-64 py-8 inline-flex justify-start items-start">
          <div className="w-[896px] h-[605px] max-w-[896px] bg-white rounded-lg shadow-xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="w-[896px] h-[605px] bg-white flex flex-col justify-start items-start">
              {/* 상단 헤더 */}
              <div className="w-[896px] h-16 px-4 py-4 border-b border-gray-200 inline-flex justify-between items-center">
                <div className="w-16 h-7 flex justify-start items-center">
                  <div
                    id="product-modal-title"
                    className="justify-start text-gray-900 text-lg font-semibold font-['Roboto'] leading-7 whitespace-nowrap"
                  >
                    상품 상세
                  </div>
                </div>
                <div className="w-6 h-8 flex justify-center items-start">
                  <div
                    className="pt-1 flex justify-start items-start cursor-pointer"
                    onClick={onClose}
                    aria-label="닫기"
                  >
                    <img
                      src="/icons/Icon-587.svg"
                      alt="닫기 아이콘"
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>

              {/* 본문 */}
              <div className="w-[896px] h-[540px] p-6 inline-flex justify-start items-start gap-6 flex-wrap content-start">
                {/* 왼쪽 이미지*/}
                <div className="w-96 h-[492px] inline-flex flex-col justify-start items-start">
                  <div className="pb-4 inline-flex justify-start items-start">
                    <div className="w-96 h-96 inline-flex flex-col justify-start items-start">
                      <img
                        className="w-96 h-96 max-w-96 rounded-lg object-cover"
                        src="/images/Modal.jpg"
                        alt="상품 이미지"
                      />
                    </div>
                  </div>

                  <div className="w-96 h-16 inline-flex justify-start items-start overflow-hidden">
                    <div className="w-16 h-16 p-0.5 rounded-lg outline outline-2 outline-offset-[-2px] outline-orange-500 inline-flex flex-col justify-start items-start overflow-hidden">
                      <img
                        className="w-14 h-14 max-w-16 object-cover"
                        src="/images/1.jpg"
                        alt="썸네일1"
                      />
                    </div>
                    <div className="pl-2 flex justify-start items-start">
                      <div className="w-16 h-16 p-0.5 rounded-lg outline outline-2 outline-offset-[-2px] outline-gray-200 inline-flex flex-col justify-start items-start overflow-hidden">
                        <img
                          className="w-14 h-14 max-w-16 object-cover"
                          src="/images/2.jpg"
                          alt="썸네일2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 오른쪽 상품 정보 */}
                <div className="w-96 h-[492px] inline-flex flex-col justify-start items-start">
                  <div className="pb-6 inline-flex justify-start items-start">
                    <div className="w-96 h-48 inline-flex flex-col justify-start items-start">
                      <div className="pb-2 inline-flex justify-start items-start">
                        <div className="w-96 h-7 flex justify-start items-center">
                          <div className="justify-center text-gray-900 text-xl font-bold font-['Roboto'] leading-7">
                            길벗고 들일 소맥기도 4마리 360도 어울이브라미
                          </div>
                        </div>
                      </div>

                      <div className="pb-4 inline-flex justify-start items-start">
                        <div className="w-96 h-8 flex justify-start items-center">
                          <div className="justify-center text-gray-900 text-2xl font-bold font-['Roboto'] leading-loose">
                            20,000원
                          </div>
                        </div>
                      </div>

                      <div className="pb-4 inline-flex justify-start items-start">
                        <div className="w-96 h-5 flex justify-start items-center text-gray-500 text-sm font-normal">
                          송도동 • 몇초 전
                        </div>
                      </div>

                      <div className="pb-6 inline-flex justify-start items-start">
                        <div className="w-96 h-5 flex justify-start items-center gap-6 text-gray-500 text-sm font-normal">
                          {/* 채팅 */}
                          <div className="flex items-center gap-1">
                            <img
                              src="/icons/Icon-618.svg"
                              alt="채팅"
                              className="w-4 h-4"
                            />
                            채팅 2
                          </div>

                          {/* 관심 */}
                          <div className="flex items-center gap-1">
                            <img
                              src="/icons/Icon-624.svg"
                              alt="관심"
                              className="w-4 h-4"
                            />
                            관심 {likes}
                          </div>

                          {/* 조회 */}
                          <div className="flex items-center gap-1">
                            <img
                              src="/icons/Icon-630.svg"
                              alt="조회"
                              className="w-4 h-4"
                            />
                            조회 317
                          </div>
                        </div>
                      </div>

                      <div className="pb-6 inline-flex justify-start items-start">
                        <div className="w-96 h-6 flex justify-start items-center text-gray-700 text-base font-normal">
                          거의 완전새제품입니다 기스도 없어요 입문용으로 좋아요
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 판매자 정보 */}
                  <div className="pb-6 inline-flex justify-start items-start w-96 h-16 pt-6 border-t border-gray-200">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center overflow-hidden">
                      <img
                        src="/icons/Icon-641.svg"
                        alt="판매자 프로필"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>

                    <div className="pl-3 flex flex-col justify-center">
                      <div className="text-gray-900 text-base font-medium leading-normal">
                        kksa
                      </div>
                      <div className="text-gray-500 text-sm font-normal leading-tight">
                        왕십리도선동
                      </div>
                    </div>

                    <div className="pl-3 text-green-600 text-sm font-medium leading-tight">
                      39.4°C 😃
                    </div>
                  </div>

                  {/* 하단 버튼 */}
                  <div className="w-96 h-14 inline-flex justify-start items-start">
                    <div
                      className="w-12 h-14 p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center"
                      onClick={handleLikeClick}
                      role="button"
                    >
                      <img
                        src={liked ? "/icons/heart.svg" : "/icons/Icon-655.svg"}
                        alt="공유 아이콘"
                        className="w-5 h-5 object-contain shrink-0"
                      />
                    </div>
                    <div className="pl-3 flex justify-start items-start">
                      <div className="w-96 h-14 px-6 py-3 bg-orange-500 rounded-lg flex justify-center items-center">
                        <div className="text-center text-white text-base font-medium leading-normal">
                          당근 채팅하기
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
