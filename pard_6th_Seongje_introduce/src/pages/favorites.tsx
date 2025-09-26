/*type 별칭 + 유니온 */
type Hobby = "축구" | "헬스" | "음식";

/*튜플 타입: [이름, 설명] */
type HobbyItem = [Hobby, string];

const favorites: HobbyItem[] = [
  ["축구", "Vamos Pohang Steelers"],
  ["헬스", "3대 400 목표"],
  ["음식", "초밥, 간짜장 사랑함"],
];

/*선택적 매개변수, 기본값, 나머지 매개변수*/
const greet = (name: string, age = 23, ...likes: string[]) =>
  `${name}(${age}) likes ${likes.join(", ")}`;

void greet("LSJ", undefined, ...favorites.map((f) => f[0]));

export default function Favorites() {
  return (
    <div className="container">
      <h1 className="title">My Favorites</h1>
      <div className="blockContainer">
        {favorites.map(([name, desc]) => (
          <div key={name} className="block">
            <h2>{name}</h2>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
