import {User} from "@/interfaces/userInterface";

interface Props {
  user: User;
}

const Card = ({user}: Props) => {
  return (
    <div>
      <p>{user.firstname + " " + user.lastname}</p>
      <p>{user.phoneNumber}</p>
      <p>{user.relation}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default Card;