/*interface + extends (인터페이스 상속) */
interface User {
  name: string;
  id: number;
  age: number;
}

interface Pard extends User {
  part: "web" | "design" | "ios" | "server" | "기획";
}

/*유틸리티 타입(Partial) – 일부만 채워 업데이트 */
const updateUser = (u: User, patch: Partial<User>): User => ({ ...u, ...patch });

const me: Pard = { name: "이성제", id: 22200525, age: 22, part: "web" };
const olderMe = updateUser(me, { age: 23 });

/*함수 타입 + 화살표 함수 */
type Line = (label: string, value: string | number) => JSX.Element;
const line: Line = (label, value) => (
  <p>
    <strong>{label}:</strong> {String(value)}
  </p>
);

export default function About() {
  return (
    <div className="container">
      <h1 className="title">About Me</h1>
      <div className="block" style={{ alignItems: "flex-start", padding: 24 }}>
        {line("NAME", olderMe.name)}
        {line("ID", olderMe.id)}
        {line("AGE", olderMe.age)}
        {line("PART", me.part)}
      </div>
    </div>
  );
}
