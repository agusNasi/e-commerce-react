import React, { useState, useEffect } from "react";
import "../assets/css/ItemCount.css"
import { Link } from "react-router-dom";

export const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(parseInt(initial))

    const decrease = () => {
        setCount(count - 1);
    }
    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    const SiStock = () => {
        return (
            <>
                <div className="container-count">
                    <button className="btn btn-outline-dark" disabled={count <= 1} onClick={decrease}>-</button>
                    <span className="label">{count}</span>
                    <button className="btn btn-outline-dark" disabled={count >= stock} onClick={increase}>+</button>
                </div>
                <div className="btn-detail">
                    <button className="btn btn-outline-dark addtocart" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
                    <Link to="/productos" className="btn btn-dark">Volver a la tienda</Link>
                </div>
            </>
        );
    }

    const NoStock = () => {
        return (
            <>
                <div className="container-noStock">
                    <p className="btn btn-outline-dark disabled">No hay stock</p>
                    <Link to="/" className="btn btn-dark">Volver a la tienda</Link>
                </div>
            </>
        );
    }

    return (
        <div className="containerCounter">
            {stock === 0 ? <NoStock /> : <SiStock />}
        </div>
    );
}