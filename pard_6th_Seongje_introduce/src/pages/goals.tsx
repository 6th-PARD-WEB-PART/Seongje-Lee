/*interface + 배열 */
interface Goal {
  order: number;
  text: string;
  achieved?: boolean; // 선택 속성
}

/* 함수 표현식 + 명시적 함수 타입 */
type ToText = (g: Goal) => string;
const toText: ToText = (g) => `${g.order}. ${g.text}${g.achieved ? " ✅" : ""}`;

const goals: Goal[] = [
  { order: 1, text: "평점 4.0" },
  { order: 2, text: "PARD 과제 마감 준수" },
  { order: 3, text: "부상 없이 운동", achieved: true },
];

export default function Goals() {
  return (
    <div className="container">
      <h1 className="title">This Semester Goals</h1>
      <div className="block" style={{ alignItems: "flex-start", padding: 24 }}>
        {goals.map((g) => (
          <h2 key={g.order}>{toText(g)}</h2>
        ))}
      </div>
    </div>
  );
}
