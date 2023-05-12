import {createContext, ReactNode, useReducer} from "react";
import FormReducer, {initialState} from "@/reducer/FormReducer";

const FormContext = createContext({});

interface Props {
  children: ReactNode;
}

const FormProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(FormReducer, initialState);

  const setFormData = (name: string, value: string) => {
    dispatch({
      type: "SET_FORM_DATA",
      payload: {name, value}
    });
  };

  const setErrors = (name: string, error: string) => {
    dispatch({
      type: "SET_ERRORS",
      payload: {name, error}
    });
  };

  return (
    <FormContext.Provider value={{state, setFormData, setErrors}}>
      {children}
    </FormContext.Provider>
  );
};