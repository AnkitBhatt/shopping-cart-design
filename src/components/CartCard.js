import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./CartCard.css";

export const CartCard = ({product}) => {
  const dispatch = useDispatch();

  const {image, heading, price} = product;

  return (
    <div className="cartCard">
      <img src={image} alt="" />
      <p className="productName">{heading}</p>
      <p className="productPrice">{price}</p>
      <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  )
}
