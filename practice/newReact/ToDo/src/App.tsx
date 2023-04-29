import "./App.css";
import {
  Button, Input
} from "./component";
import {
  useState
} from "react";

interface ToDoItem {
  id: number;
  name: string;
}

function App() {
  const [input, setInput] = useState("");
  const [arrayInput, setArrayInput] = useState<ToDoItem[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [idEditing, setIdEditing] = useState(0);

  const onChangeHandler = (value: string) => {
    setInput(value);
  };

  const addToList = () => {
    const object = {
      id: Date.now(),
      name: input
    };

    let copyArray = [...arrayInput];
    copyArray.push(object);
    setArrayInput(copyArray);
    setInput("");
  };

  const removeToList = (id: number) => {
    const copyArray = arrayInput.filter(item => item.id !== id);
    setArrayInput(copyArray);
  };

  const editToList = (item: ToDoItem) => {
    setInput(item.name);
    setIsEditing(true)
    setIdEditing(item.id)
  };

  const saveEdit = () => {
    setIsEditing(false)
    const updatedArray = arrayInput.map(obj => {
      if (obj.id === idEditing) {
        return { ...obj, name: input };
      }
      return obj;
    });
    setArrayInput(updatedArray)
  }

  return (
    <div className={"flex flex-col items-center"}>
      <div className={"flex justify-center items-center gap-4"}>
        <Input onChange={(value) => onChangeHandler(value)} value={input}></Input>
        <Button title={isEditing ? "Edit" : "Add"} onClick={isEditing ? saveEdit : addToList}/>
      </div>
      <div className={"flex items-center mt-2 flex-col gap-2 rounded-md"}>
        {
          arrayInput.map(item => {
            return <div className={"bg-pink-500 p-2 rounded-md flex gap-2 items-center"}>
              <p>{item.name}</p>
              <Button title={"Delete"} onClick={() => removeToList(item.id)}/>
              <Button title={"Edit"} onClick={() => {
                editToList(item);
              }
              }/>
            </div>;
          })
        }
      </div>
    </div>
  );
}

export default App;
