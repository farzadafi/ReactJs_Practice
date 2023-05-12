import "./index.css";
import {Container, FormInput, Header} from "@/layout";
import {MovieProvider} from "@/context/CardContext";
import {FormProvider} from "@/context/FormContext";

function App() {

  return (
    <>
      <div>
        <MovieProvider>
          <Container>
            <Header/>
            <FormProvider>
              <FormInput/>
            </FormProvider>
          </Container>
        </MovieProvider>
      </div>
    </>
  );
}

export default App;
