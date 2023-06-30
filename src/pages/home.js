import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import {unSetUser} from "../reducers/users/userSlice"
import { useNavigate } from 'react-router';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user)
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3000/products")
    .then(res=>{
        setProducts(res.data);
    })
    .catch(e =>{console.log(e)});
  }, [])

function handleClick(e){
  dispatch(unSetUser());
  navigate("/");
}
  return (
    <div>
      <h2> Home </h2>
      <p> Bienvenido {user.fullname} / {user.email}</p>
      <button className='btn btn-primary' onClick={handleClick}>Logout</button>
      <ProductList products={products}/>
    </div>
  )
}
