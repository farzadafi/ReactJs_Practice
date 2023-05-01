import "./index.css";
import {Post} from "./component";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <Post/>
      <ToastContainer/>
    </>
  );
}

export default App;
