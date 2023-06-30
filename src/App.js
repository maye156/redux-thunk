import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./reducers/users/userSlice";




function App() {
  const dispatch = useDispatch();
  const { email, fullName } = useSelector(state => state.user)

  return (
    <div className="container">
      <h1>Hola pagina</h1>
      <button onClick={() => {
        dispatch(setUser({ 
          email: "j@x.com", fullName: "Juan", token: "123456" }))}} className="btn btn-primary">Cambiar Usuario</button>
    </div>
  );
}

export default App;
