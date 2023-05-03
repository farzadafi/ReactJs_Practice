import "./index.css";
import {Form} from "@/Component";
import {useState} from "react";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [relation, setRelation] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const firstnameOnchangeHandler = (e: string) => {
    setFirstname(e);
    enableButton();
  };

  const lastnameOnchangeHandler = (e: string) => {
    setLastname(e);
    enableButton();
  };

  const phoneNumberOnchangeHandler = (e: string) => {
    setPhoneNumber(e);
    enableButton();
  };

  const emailOnchangeHandler = (e: string) => {
    setEmail(e);
    enableButton();
  };

  const onClickHandlerCustomSelect = (e: string) => {
    setRelation(e);
    enableButton();
  };

  function enableButton() {
    if ((firstname.length > 0) && (lastname.length > 0) && (phoneNumber.length > 6) && (relation.length > 0) && (email.length > 0))
      setIsDisabled(false);
  }

  const handleAddCard = () => {
    alert("firstname");
  };

  return (
    <>
      <Form firstname={firstname} lastname={lastname} email={email} phoneNumber={phoneNumber}
            firstnameInputChange={firstnameOnchangeHandler} lastnameInputChange={lastnameOnchangeHandler}
            onAddCard={handleAddCard} phoneNumberInputChange={phoneNumberOnchangeHandler}
            emailInputChange={emailOnchangeHandler} isDisabled={isDisabled}
            customSelectInputChange={onClickHandlerCustomSelect} relation={relation} />
    </>
  );
}

export default App;
