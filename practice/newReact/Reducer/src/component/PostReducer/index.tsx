import {useEffect, useReducer} from "react";
import axios from "axios";
import CustomToast from "../customToast";

const initialState = {
  title: "",
  id: 1,
  loading: true,
  toast: {
    type: "success",
    message: ""
  }
};

function userActionReducer(state, action) {
  switch (action.type) {
  case "get-post-request" :
    return {
      ...state,
      postId: action.payload,
      loading: true
    };
  case "get-post-success" :
    return {
      ...state,
      loading: false,
      title: action.payload.title,
      toast: action.payload.toast
    };
  default:
    return state;
  }
}

const PostReducer = () => {
  const [state, dispatch] = useReducer(userActionReducer, initialState, undefined);

  useEffect(() => {
    axios(`http://localhost:3000/posts/${state.postId}`)
      .then(({data}) => {
        dispatch({
          type: "get-post-success",
          payload: {
            title: data.title,
            postId: data.id,
            toast: {
              type: "success",
              message: `${data.id} is get success`
            }
          }
        });
      });
  }, [state.postId]);

  const handleChange = ({target}) => {
    dispatch({
      type: "get-post-request",
      payload: target.value
    });
  };

  return (
    <div className={"flex justify-center mt-48 flex-col items-center"}>
      <div>
        <label htmlFor="">Post Id :</label>
        <input type="number" value={state.postId}
               className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
               onChange={handleChange}/>
      </div>
      <div className={"text-blue-500 mt-10"}>
        {state.loading ? <span>Loading</span> : <span>{state.title}</span>}
      </div>
      <CustomToast type={state.toast.type} message={state.toast.message}/>
    </div>
  );
};

export default PostReducer;