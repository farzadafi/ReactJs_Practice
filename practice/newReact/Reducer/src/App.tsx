import "./index.css";
// import {Post} from "./component";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {PostReducer} from "./component";

function App() {
  return (
    <>
      {/*<Post/>*/}
      <PostReducer/>
      <ToastContainer/>
    </>
  );
}

export default App;
