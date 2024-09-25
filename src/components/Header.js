import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import Logo from '../assets/logo (1).png'
import "./Header.css";

export const Header = () => {
  const cartList = useSelector(state => state.cartState.cartList)
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Redux Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/cart" className="link" >Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  )
}
