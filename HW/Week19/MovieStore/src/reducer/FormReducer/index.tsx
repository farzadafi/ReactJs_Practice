type FormData = {
  name : string,
}

type Error = {
  name : string,
  error : string
}

interface State {
  formData: FormData;
  errors: Error;
  setErrors : (name:string, error:string) => void
}

export const initialState: State = {
  formData: {
    name: ""
  },
  errors: {
    name : '',
    error: ''
  },
  setErrors: () => {
  }
};

interface Action {
  type: string;
  payload: {
    name:string
    value?:string
    error?:string
  };
}

const FormReducer = (state:State, action:Action) => {
  switch (action.type) {
  case "SET_FORM_DATA":
    return {
      ...state,
      formData: {
        ...state.formData,
        [action.payload.name]: action.payload.value
      }
    };
  case "SET_ERRORS":
    return {
      ...state,
      errors: {
        ...state.errors,
        [action.payload.name]: action.payload.error
      }
    };
  default:
    return state;
  }
};

export default FormReducer;