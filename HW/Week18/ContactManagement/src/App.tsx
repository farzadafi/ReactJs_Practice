import "./index.css";
import {Form} from "@/Component";
import {useState} from "react";
import {User} from "@/interfaces/userInterface";

function App() {

  const [user, setUser] = useState<User>();

  const setUserHandler = (user: User) => {
    setUser(user);
  };

  return (
    <>
      <Form user={user} setUser={setUserHandler}/>
    </>
  );
}

export default App;
