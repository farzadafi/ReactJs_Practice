import {ElementGenerator} from "@/library";
import {HomeScreen} from "@/Screen";

const App = () => {
    return ElementGenerator({
        element: 'div',
        child: [HomeScreen]
    })
}

export default App