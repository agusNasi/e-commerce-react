import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useCartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {

	const { totalProducts} = useCartContext();

	
	return (

	
		<>
		    <NavLink to="/cart" className="btn btn-outline-dark ms-2"><i className="bi bi-cart3"></i> Carrito <span>({totalProducts()})</span></NavLink>
		</>
	);
};

export default CartWidget;

