
import "./CartCard.css";

export const CartCard = ({product}) => {

  const {image, heading, price} = product;

  return (
    <div className="cartCard">
      <img src={image} alt="" />
      <p className="productName">{heading}</p>
      <p className="productPrice">{price}</p>
      <button>Remove</button>
    </div>
  )
}
