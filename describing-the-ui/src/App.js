import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function Item({ person }) {
  return (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );
}

export default function List() {
  const chemists = people
    .filter((person) => person.profession === "chemist")
    .map((person) => <Item key={person.id} person={person} />);
  const others = people
    .filter((person) => person.profession !== "chemist")
    .map((person) => <Item key={person.id} person={person} />);

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{chemists}</ul>
      <ul>{others}</ul>
    </article>
  );
}
