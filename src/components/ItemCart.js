import React from 'react';
import { useCartContext } from '../context/CartContext';
import '../assets/css/ItemCart.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const ItemCart = ({ product}) => {


    const { removeProduct} = useCartContext();

    
    return (
        <>
            <div className='container-item__cart'>
                <div className='col-md-2'>
                    <img className='image-itemCart' src={product.image} alt={product.title} />
                </div>
                <div className='item-cart-mid col-md-6'>
                    <p>{product.title}</p>
                    <p>({product.quantity})</p>
                    <p>${product.price}</p>
                </div>
                <div className='col-md-2 item-cart-right'>
                    <i className="bi bi-trash-fill remove-item" onClick={() => removeProduct(product.id)}></i>
                    <p className='subtotal'>Subtotal: ${product.quantity * product.price}</p>
                </div>
            </div>
        </>
    )
}
