import {Container} from "./layout";
import {Main} from "./component";
import {useEffect, useState} from "react";
import axios from "axios";
import {ProductInterface} from "./interfaces/ProductInterface";

function App() {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
      axios("http://localhost:3000/products")
        .then(({data}) => {
          setProducts(data)
        })
  }, []);

  console.log(products);
  return (
    <>
      <Container>
        <Main products={products}/>
      </Container>
    </>
  );
}

export default App;
