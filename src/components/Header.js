import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/logo (1).png'

export const Header = () => {
  const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
  const inActiveClass = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  return (
    <header>

      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Shopping Cart Logo" />
            <span className="self-center text-xl whitespace-nowrap dark:text-white">Shopping Cart</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <span>Cart: 2</span>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass} aria-current="page" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={({isActive}) => isActive ? activeClass : inActiveClass}>Cart</NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav>

    </header>
  )
}
