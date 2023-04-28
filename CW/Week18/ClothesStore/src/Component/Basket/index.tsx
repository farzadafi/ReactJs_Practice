import {ActiveProducts} from "@/interfaces";
import {BasketCard} from "@/Component";
import Button from "@/Component/Button";
import {Product} from "@/interfaces/product";

interface Props {
  activeProducts: ActiveProducts[];
  setActiveProducts: (activeProducts: ActiveProducts[]) => void;
}

const Basket = ({activeProducts, setActiveProducts}: Props) => {
  const total = activeProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const removeProduct = (item: Product) => {
    const index = activeProducts.findIndex(i => i.id === item.id);
    let copyState = [...activeProducts];
    if (copyState[index].quantity > 1) {
      copyState[index].quantity--;
      } else {
        copyState = copyState.filter(i => i.id !== item.id);
      }
      setActiveProducts(copyState);
    }

    return (
      <div className={"flex-1"}>
        <p className={"border-b border-slate-400 text-center pb-4"}>{"Cart is Empty"}</p>
        <div className={"p-5 space-y-12"}>
          {
            activeProducts.map(item => {
              return <BasketCard removeProduct={() => removeProduct(item)} key={item.id} activeProduct={item}/>;
            })
          }
          {
            activeProducts.length ? (<div className={"flex items-center gap-2 justify-center"}>
              <p>Total:{total}</p>
              <Button variant={"AddToCard"} text={"Proceed"}/>
            </div>) : null
          }
        </div>
      </div>
    );
  };

  export default Basket;