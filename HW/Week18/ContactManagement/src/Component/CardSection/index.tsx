import {User} from "@/interfaces/userInterface";
import {Card} from "@/Component";

interface Props {
  users: User[];
}

const CardSection = ({users}: Props) => {
  return (
    <div>
      {
        users.map(item => (<Card user={item}/>))
      }
    </div>
  );
};

export default CardSection;