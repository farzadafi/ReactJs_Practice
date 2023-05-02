import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import CustomToast from "../customToast";

function Post() {
  const [title, setTitle] = useState("");
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [customToast, setCustomToast] = useState({type: "success", message: ""});

  interface Payload {
    id: number;
    title: string;
  }

  function userAction(type: string, payload: Payload) {
    switch (type) {
    case "get-post-request" :
      setPostId(payload.id);
      setLoading(true);
      break;
    case "get-post-success" :
      setTitle(payload.title);
      setLoading(false);
      toast.success(`${payload.id} is fetched :)`);
    }

  }

  useEffect(() => {
    axios(`http://localhost:3000/posts/${postId}`)
      .then(({data}) => {
        userAction("get-post-success", {
          id: data.id,
          title: data.title
        })
      });
  }, [postId]);

  // @ts-ignore
  const handleChangePost = ({target}) => {
    userAction("get-post-request", {
      id: target.value,
      title: "null"
    });
  };

  return (
    <>
      <div className={"flex justify-center mt-48 flex-col items-center"}>
        <div>
          <label htmlFor="">Post Id :</label>
          <input type="number" value={postId}
                 className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                 onChange={handleChangePost}/>
        </div>
        <div className={"text-blue-500 mt-10"}>
          {loading ? <span>Loading</span> : <span>{title}</span>}
        </div>
        <CustomToast type={customToast.type} message={customToast.message}/>
      </div>
    </>
  );
}

export default Post;
