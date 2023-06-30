import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./reducers/users/userSlice";
import { Index } from "./pages";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/home";


function App() {
  const dispatch = useDispatch();
  const { email, fullName } = useSelector(state => state.user)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
    <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
