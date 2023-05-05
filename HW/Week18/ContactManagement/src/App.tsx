import "./index.css";
import {CardSection, Form} from "@/Component";
import {useState} from "react";
import {User} from "@/interfaces/userInterface";

function App() {

  const [users, setUser] = useState<User[]>();

  const setUserHandler = (userPass: User) => {
    setUser(
      [...users ?? [], userPass]
    );
  };

  return (
    <>
      <Form setUser={setUserHandler}/>
      {
        users && <CardSection users={users}/>
      }
    </>
  );
}

export default App;
