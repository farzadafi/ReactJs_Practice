import elementGenerator from "./library/ElementGenerator.js";
import Container from "./layout/Container";

const App = () => {
    const app = elementGenerator({
        element:'div',
        child:[]
    })
    return Container(app)
}

export default App;