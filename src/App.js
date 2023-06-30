import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./reducers/users/userSlice";
import { Index } from "./pages";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/home";
import Cart from "./pages/cart";


function App() {
 
  const {totalCount} = useSelector(state=> state.cart);
  return (
    <div className="container">
      <div className="d-flex py-4">
        <Link  className="btn btn-info mx-2" to="/"> Login</Link>
        <Link  className="btn btn-info mx-2" to="/home"> Home</Link>
        <div className="ms-auto">
          <Link className="btn btn-primary position-relative" to="/cart"> Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCount}
              <span className="visually-hidden">products in cart</span>
            </span>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </div>


  );
}

export default App;
