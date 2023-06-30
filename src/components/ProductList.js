import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementar, decrementar } from '../reducers/cart/cartSlice';
const ProductList = ({ products }) => {

    const {productsList} = useSelector(state=>state.cart);
    const dispatch = useDispatch();

    function handleAddorRemove(productId){
        const product = products.find(product=>product.id===productId);
        if(productsList.find(pdt=>pdt.id===productId)){
            dispatch(decrementar(productId))
        }else{
            dispatch(incrementar(product))
        }
    }
    return (
        <div>
            <h2>Listado Productos</h2>
            <div className='row'>
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className='col-3 mt-3'>
                                <h5> {product.value.nombre}</h5>
                                <p><b>Presentación:</b>{product.value.presentacion}</p>
                                <p><b>Marca:</b>{product.value.marca}</p>
                                <button
                                className={`btn ${productsList.find(pdt => pdt.id===product.id) ?"btn-danger": "btn-success"}`}
                                onClick={()=>handleAddorRemove(product.id)}  > 
                                {productsList.find(pdt=> pdt.id=== product.id)?"Retirar":"Agregar"} al Carrito
                                </button>
                            </div>
                        )
                    })
                }
            </div>



        </div>



    )
}

export default ProductList
