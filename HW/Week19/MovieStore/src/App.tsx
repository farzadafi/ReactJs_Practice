import "./index.css";
import {Container, FormInput, Header} from "@/layout";
import {MovieProvider} from "@/context";

function App() {

  return (
    <>
      <div>
        <MovieProvider>
          <Container>
            <Header/>
            <FormInput/>
          </Container>
        </MovieProvider>
      </div>
    </>
  );
}

export default App;
