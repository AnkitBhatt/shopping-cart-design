import "./ProductCard.css"

export const ProductCard = ({product}) => {

  const {image, heading, price} = product;

  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className="name">{heading}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}
