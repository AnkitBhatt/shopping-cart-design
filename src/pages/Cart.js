import { useTitle } from "../hooks/useTitle"
import { CartCard } from "../components"

export const Cart = () => {

  useTitle("Cart");

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
    }
  ]

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        { products && products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }
      </section>
    </main>
  )
}
