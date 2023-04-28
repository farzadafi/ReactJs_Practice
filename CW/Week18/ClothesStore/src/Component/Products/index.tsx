import {Card, FilterSection} from "@/Component";
import {ActiveProducts} from "@/interfaces";
import {Product} from "@/interfaces/product";

const products: Product[] = [
  {
    id: "1",
    image: "https://react-shopping-cart-seven-lovat.vercel.app/images/dress5.jpg",
    name: "Frill mini dress in yellow polka dot",
    description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to." +
      " Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges:" +
      " ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    price: 1000,
    size: ["XL", "L"]
  },
  {
    id: "2",
    image: "https://react-shopping-cart-seven-lovat.vercel.app/images/dress5.jpg",
    name: "Frill mini dress in yellow polka dot",
    description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to." +
      " Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges:" +
      " ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    price: 1000,
    size: ["XL", "L"]
  },
  {
    id: "3",
    image: "https://react-shopping-cart-seven-lovat.vercel.app/images/dress5.jpg",
    name: "Frill mini dress in yellow polka dot",
    description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to." +
      " Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges:" +
      " ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    price: 1000,
    size: ["XL", "L"]
  },
  {
    id: "4",
    image: "https://react-shopping-cart-seven-lovat.vercel.app/images/dress5.jpg",
    name: "Frill mini dress in yellow polka dot",
    description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to." +
      " Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges:" +
      " ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    price: 1000,
    size: ["XL", "L"]
  },
  {
    id: "5",
    image: "https://react-shopping-cart-seven-lovat.vercel.app/images/dress5.jpg",
    name: "Frill mini dress in yellow polka dot",
    description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to." +
      " Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges:" +
      " ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    price: 1000,
    size: ["XL", "L"]
  },
  {
    id: "6",
    image: "https://react-shopping-cart-seven-lovat.vercel.app/images/dress5.jpg",
    name: "Frill mini dress in yellow polka dot",
    description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to." +
      " Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges:" +
      " ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    price: 1000,
    size: ["XL", "L"]
  },
];

interface Props {
  activeProducts: ActiveProducts[];
  setActiveProducts: (activeProduct: ActiveProducts[]) => void;
  /*Dispatch<SetStateAction<ActiveProducts[]>>*/
}

const Products = ({activeProducts, setActiveProducts}: Props) => {
  const addProduct = (item: Product) => {
    const index = activeProducts.findIndex(i => i.id === item.id);
    const copyState = [...activeProducts];
    if (index >= 0) {
      copyState[index].quantity++;
    } else {
      copyState.push({
        ...item,
        quantity: 1
      });
    }
    setActiveProducts(copyState);
  };

  return (
    <div className={" w-[70%]"}>
      <FilterSection/>
      <div className={"flex flex-wrap gap-4 mt-5"}>
        {
          products.map(item => {
            return <Card key={item.id} addProduct={() => addProduct(item)} price={item.price} name={item.name}
                         url={item.image}/>;
          })
        }
      </div>
    </div>
  );
};

export default Products;