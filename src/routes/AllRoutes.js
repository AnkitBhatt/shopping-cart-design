import { Route, Routes } from 'react-router-dom';
import { Home, Cart } from '../pages';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} end/>
      <Route path="cart" element={<Cart />} />
    </Routes>
  )
}
