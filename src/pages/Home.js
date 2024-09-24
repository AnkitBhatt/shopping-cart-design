import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {

  useTitle("Home");
  
  const products = [
    {
      id: 1,
      image: "/images/1001.png",
      heading: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 49
    },
    {
      id: 2,
      image: "/images/1002.jpg",
      heading: "boAt Rockerz 450",
      price: 99
    },
    {
      id: 3,
      image: "/images/1003.png",
      heading: "JBL Tune 760NC",
      price: 119
    },
    {
      id: 4,
      image: "/images/1004.png",
      heading: "Logitech H111 Wired",
      price: 79
    },
    {
      id: 5,
      image: "/images/1005.png",
      heading: "Apple airpods max bluetooth headset",
      price: 399
    },
    {
      id: 6,
      image: "/images/1006.png",
      heading: "Zebronics Zeb-Thunder Wired",
      price: 119
    },
    {
      id: 7,
      image: "/images/1007.jpg",
      heading: "Jabra Headphone with mic",
      price: 199
    },
    {
      id: 8,
      image: "/images/1008.jpg",
      heading: "Boult headphone with mic",
      price: 39
    }
  ]

  return (
    <main className="max-w-7xl mx-auto py-7 my-7">
      <section className="products">
        {
          products && products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </section>
    </main>
  )
}
