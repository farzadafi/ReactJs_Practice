import './App.css'
import Header from "./Component/Header";
import Container from "./layout/Container";
import Main from "./Component/Main";
import Footer from "./Component/Footer/Footer";

function App() {
    return (<div className={"font-Vazir"}>
            <Container>
                <Header/>
                <Main/>
                <Footer/>
            </Container>
        </div>
    )
}

export default App
