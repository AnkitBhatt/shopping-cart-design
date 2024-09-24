import { Link } from "react-router-dom"

export const ProductCard = ({image, heading, price}) => {
  return (
    <div className="max-w-sm max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 m-4">
      <Link to="/">
        <img className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
        </Link>
        <div className="flex flex-wrap justify-between">
          <p className="font-bold text-xl">${price}</p>
          <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  )
}
