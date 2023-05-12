interface State {
  formData: {};
  errors: {};
}

export const initialState: State = {
  formData: {
    firstname: ""
  },
  errors: {
    isValidFirstname: false
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

const FormReducer = (state, action:Action) => {
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