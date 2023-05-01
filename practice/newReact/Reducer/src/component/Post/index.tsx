import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import CustomToast from "../customToast";

function Post() {
  const [title, setTitle] = useState("");
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [customToast, setCustomToast] = useState({type : 'success', message : ''})

  useEffect(() => {
    axios(`http://localhost:3000/posts/${postId}`)
      .then(({data}) => {
        setTitle(data.title)
        setLoading(false)
        toast.success(`${postId} is fetched :)`)
      });
  }, [postId]);

  // @ts-ignore
  const handleChangePost = ({target}) => {
    setPostId(target.value)
    setLoading(true)
  }

  return (
    <>
      <div className={"flex justify-center mt-48 flex-col items-center"}>
        <div>
          <label htmlFor="">Post Id :</label>
          <input
            type="number"
            value={postId}
            className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            onChange={handleChangePost}
          />
        </div>
        <div className={"text-blue-500 mt-10"}>
          { loading ? <span>Loading</span> : <span>{title}</span>}
        </div>
        <CustomToast type={customToast.type} message={customToast.message}/>
      </div>
    </>
  );
}

export default Post;
