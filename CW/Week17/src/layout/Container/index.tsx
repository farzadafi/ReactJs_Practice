import React from "react";

type containerProps = {
    children:React.ReactNode
}
function Container({children}:containerProps) {
    return ( <div className={"container mx-auto max-w-7xl mt-4"}>
        {children}
    </div>)
}

export default Container
