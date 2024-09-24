
import { ProductCard } from "../components";
import img1 from "../assets/images/img-1.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";

export const Home = () => {
  
  const arr = [
    {
      image: img1,
      heading: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 49
    },
    {
      image: img2,
      heading: "boAt Rockerz 450",
      price: 99
    },
    {
      image: img3,
      heading: "JBL Tune 760NC",
      price: 119
    },
    {
      image: img1,
      heading: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 49
    },
    {
      image: img2,
      heading: "boAt Rockerz 450",
      price: 99
    },
    {
      image: img3,
      heading: "JBL Tune 760NC",
      price: 119
    }
  ]

  return (
    <main className="max-w-7xl mx-auto py-7 my-7">
      <div className="flex flex-wrap items-center">
        {arr && arr.map((elem) => (
          <ProductCard image={elem.image} heading={elem.heading} price={elem.price}/>
        ))}
      </div>
    </main>
  )
}
