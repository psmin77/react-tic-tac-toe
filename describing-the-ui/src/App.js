import { getImageUrl } from "./utils.js";

const person = [
  {
    name: "Maria Skłodowska-Curie",
    url: "szV5sdG",
    alt: "Maria Skłodowska-Curie",
    profession: "physicist and chemist",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discover: "polonium (chemical element)",
  },
  {
    name: "Katsuko Saruhashi",
    url: "YfeOqp2",
    alt: "Katsuko Saruhashi",
    profession: "geochemist",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discover: "a method for measuring carbon dioxide in seawater",
  },
];

function Card({ name, url, alt, profession, awards, discover }) {
  const size = 70;

  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(url)}
        alt={alt}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards?.length} </b>({awards?.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discover}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {person.map((p) => (
        <Card key={p.name} {...p} />
      ))}
    </div>
  );
}
