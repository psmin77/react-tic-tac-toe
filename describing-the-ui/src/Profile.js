import Panel from "./Panel.js";
import { getImageUrl } from "./utils.js";

function Header({ name }) {
  return <h1>{name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

export default function Profile({ person }) {
  currentPerson = person;
  return (
    <Panel>
      <Header name={person.name} />
      <Avatar person={person} />
    </Panel>
  );
}
