import Link from "next/link";

/*타입 별칭 + 유니온*/
type Nav =
  | { kind: "route"; href: string; title: string }
  | { kind: "external"; url: string; title: string };

/*제네릭 함수*/
const titlesOf = <T extends { title: string }>(items: T[]): string[] =>
  items.map((i) => i.title);

/*배열 사용 */
const navs: Nav[] = [
  { kind: "route", href: "/about", title: "About" },
  { kind: "route", href: "/favorites", title: "Favorites" },
  { kind: "route", href: "/goals", title: "Goals" },
  { kind: "external", url: "https://handong.edu", title: "HGU" },
];

void titlesOf(navs);

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Welcome to LSJ's World👋</h1>
      <div className="blockContainer">
        {navs.map((n) =>
          n.kind === "route" ? (
            <Link key={n.title} href={n.href}>
              <div className="block"><h2>{n.title}</h2></div>
            </Link>
          ) : (
            <a key={n.title} href={n.url} target="_blank" rel="noreferrer">
              <div className="block"><h2>{n.title} ↗</h2></div>
            </a>
          )
        )}
      </div>
    </div>
  );
}
