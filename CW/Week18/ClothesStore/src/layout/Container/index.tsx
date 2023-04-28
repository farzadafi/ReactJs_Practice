import React from "react";
import {Header} from "@/Component";

function Container({children}) {
  return (
    <>
      <Header/>
      <div className={"container mx-auto max-w-7xl m-4"}>
        {
          children
        }
      </div>
    </>
  );
}

export default Container;