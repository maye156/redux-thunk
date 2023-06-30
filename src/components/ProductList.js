import React from 'react'

const ProductList = ({ products }) => {
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

                            </div>
                        )
                    })
                }
            </div>



        </div>



    )
}

export default ProductList
