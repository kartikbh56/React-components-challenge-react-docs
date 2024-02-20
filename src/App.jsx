import { getImageUrl, getAwardsNum, Profiles } from "./utils.js";
function Profile({ person, size }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.imgId)}
        alt={person.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {getAwardsNum.apply(person)} </b>({person.awards})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  );
}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {Profiles.map((profile, index) => (
        <Profile person={profile} key={index} />
      ))}
    </div>
  );
}
