import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementar } from '../reducers/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { productsList } = useSelector(state => state.cart)
  function handleremove(productId) {
    console.log("entro a eliminar");
    dispatch(decrementar(productId));
  }

  return (
    <div>
      <h2>Mi Carrito</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'> ID </th>
            <th scope="col">Nombre</th>
            <th scope="col">Presentación</th>
            <th scope="col">Marca</th>
            <th scope="col">Acciones</th>
          </tr>

        </thead>
        <tbody>
          {productsList.map(product => {
            return (
              <tr key={product.id}>
                <th scope='row'> {product.id} </th>
                <th scope="row">{product.value.nombre}</th>
                <th scope="row">{product.value.presentacion}</th>
                <th scope="row">{product.value.marca}</th>
                <th scope="row"><button className='btn btn-danger' onClick={() => handleremove(product.id)}>Eliminar</button></th>
              </tr>
            )
          })}

        </tbody>

      </table>
    </div>
  )
}

export default Cart;