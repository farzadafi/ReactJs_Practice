import Container from "./layout/Container";
import Header from "./Component/Header";
import Main from "./Component/Main";

const App = () => {
  return (
    <div className={"font-Vazir"}>
      <Container>
        <Header/>
        <Main/>
      </Container>
    </div>
  );
};

export default App;