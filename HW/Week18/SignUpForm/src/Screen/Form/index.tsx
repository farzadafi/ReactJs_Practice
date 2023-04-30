import {Button} from "../../Component";

const Form = () => {
  return (
    <div className={"w-48 h-52 bg-[#fdecf6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-2"}>
      <div>
        <div className={"flex gap-2 px-8"}>
          <Button title={"Sign In"} classes={""}/>
          <Button title={"Sign Up"} classes={"bg-purple-600 font-white"}/>
        </div>
      </div>
    </div>
  );
};

export default Form;