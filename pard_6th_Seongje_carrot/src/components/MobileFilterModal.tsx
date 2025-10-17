import React from "react";

type Props = {
  open?: boolean;
  onClose: () => void;
  onReset?: () => void;
  onApply?: () => void;
};

export default function MobileFilterModal({ open, onClose, onReset, onApply }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[150] md:hidden">
      {/* 배경 클릭 시 닫기 */}
      <button
        aria-label="필터 닫기"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      {/* 👇 하단에서 올라오는 시트 */}
      <aside
        role="dialog"
        aria-modal="true"
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl
                   transition-transform duration-300 translate-y-0"
      >
        {/* 내부 내용 */}
        <div className="p-5">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">필터</h2>
            <button
              type="button"
              className="text-sm font-semibold text-orange-500"
              onClick={onReset}
            >
              초기화
            </button>
          </div>

          {/* 거래 가능만 보기 */}
          <label className="flex items-center gap-2 text-sm text-gray-700 mb-5">
            <input type="checkbox" className="size-4" />
            거래 가능만 보기
          </label>

          {/* 위치 */}
          <div className="mb-2 text-base font-semibold text-gray-900">위치</div>
          <div className="mb-2 text-sm text-gray-600">인천광역시 연수구</div>

          <ul className="space-y-2 text-sm text-gray-700 mb-2">
            <li className="flex items-center gap-2">
              <input type="radio" name="dong" defaultChecked className="size-4" />
              송도동
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="dong" className="size-4" />
              송도1동
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="dong" className="size-4" />
              송도2동
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="dong" className="size-4" />
              연수동
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="dong" className="size-4" />
              동춘동
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="dong" className="size-4" />
              청학동
            </li>
          </ul>

          <button type="button" className="text-sm text-orange-500 mb-6">
            더보기
          </button>

          {/* 적용하기 버튼 */}
          <button
            type="button"
            onClick={onApply ?? onClose}
            className="w-full py-3 rounded-full bg-gray-800 text-white text-base font-semibold"
          >
            적용하기
          </button>
        </div>
      </aside>
    </div>
  );
}
