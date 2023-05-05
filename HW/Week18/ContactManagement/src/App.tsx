import "./index.css";
import {Form} from "@/Component";
import {useState} from "react";
import {User} from "@/interfaces/userInterface";

function App() {

  const [user, setUser] = useState<User>();

  const setUserHandler = (userPass: User) => {
    console.log(user);
    setUser(userPass);
  };

  return (
    <>
      <Form setUser={setUserHandler}/>
    </>
  );
}

export default App;
