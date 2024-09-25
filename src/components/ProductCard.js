import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css"
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const [isInCart, setIsInCart] = useState(false)
  const dispatch = useDispatch()
  const cartList = useSelector(state => state.cartState.cartList)
  const {id, image, heading, price} = product;

  useEffect(() => {
    setIsInCart(cartList.find(item => item.id === id))
  }, [cartList, id])

  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className="name">{heading}</p>
      <div className="action">
        <p>${price}</p>
        { isInCart ? 
        (<button className="remove" onClick={() => dispatch(remove(product))}>Remove</button>) 
        : 
        (<button onClick={() => dispatch(add(product))}>Add to Cart</button>)
        }
        
      </div>
    </div>
  )
}
