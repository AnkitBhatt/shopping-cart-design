import "./ProductCard.css"
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const [isInCart, setIsInCart] = useState(false);
  const {addToCart, cartList, removeFromCart} = useCart()

  const {id, image, heading, price} = product;

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id);
    if(productIsInCart) {
      setIsInCart(true)
    }
    else{
      setIsInCart(false)
    }
  },[cartList, id])

  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className="name">{heading}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (<button onClick={() => removeFromCart(product)} className="remove">Remove</button>) : (<button onClick={() => addToCart(product)}>Add to Cart</button>)}
        
      </div>
    </div>
  )
}
