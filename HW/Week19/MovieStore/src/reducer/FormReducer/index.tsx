type FormData = {
  name: string,
}

interface State {
  formData: FormData;
  errors: string[];
  setErrors: (name: string) => void;
}

export const initialState: State = {
  formData: {
    name: ""
  },
  errors: [],
  setErrors: () => {
  }
};

interface Action {
  type: string;
  payload: {
    name: string
    value?: string
  };
}

const FormReducer = (state, action: Action) => {
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
      errors: [...state.errors, action.payload.name]
    }
  default:
    return state;
  }
};

export default FormReducer;