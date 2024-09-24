
import { useCart } from "../context/CartContext";
import "./CartCard.css";

export const CartCard = ({product}) => {

  const {removeFromCart} = useCart();

  const {image, heading, price} = product;

  return (
    <div className="cartCard">
      <img src={image} alt="" />
      <p className="productName">{heading}</p>
      <p className="productPrice">{price}</p>
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  )
}
