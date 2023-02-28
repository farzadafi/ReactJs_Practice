import Container from "./layout/Container";
import elementGenerator from "./library/elementGenerator";
import Table from "./Components/Table/Table.js";

const App = () => {
    const app = elementGenerator({
        element:'div',
        child:[Table(), ]
    })
    return Container(app)
}

export default App;