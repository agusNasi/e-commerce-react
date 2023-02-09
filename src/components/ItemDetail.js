import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();


    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);

    }

    const BtnItemDetail = () => {
        return (
            <>
                <div>
                    <Link className="btn btn-outline-dark finish" to='/cart'>Terminar Compra</Link>
                    <Link className="btn btn-dark" to='/productos'>Seguir comprando</Link>
                </div>
            </>

        );

    }

    return (
        <>
            <div className="col-md-6">
                <img src={data.image} alt={data.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">{data.category}</h4>
                <h1 className="display-5">{data.title}</h1>
                <h3 className="display-6 fw-bold my-4">$ {data.price}</h3>
                <p className="lead">{data.description}</p>
                {
                    goToCart ? <BtnItemDetail /> : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
                }
            </div>
        </>
    );
}