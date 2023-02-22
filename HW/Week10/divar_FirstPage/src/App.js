import elementGenerator from "./library/ElementGenerator.js";
import Container from "./layout/Container";
import logo from "./Components/FirstLogo/index.js";

const App = () => {
    const app = elementGenerator({
        element:'div',
        child:[logo()]
    })
    return Container(app)
}

export default App;