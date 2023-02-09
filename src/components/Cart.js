import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { ItemCart } from "./ItemCart";
import '../assets/css/Cart.css'
import { FormBuy } from './FormBuy';

export const Cart = () => {
	const { cart, totalPrice, emptyCart, totalProducts } = useCartContext();
	const [estadoPadre, setEstadoPadre] = useState();
	const [comprador, setComprador] = useState();
	const [idBuyer, setIdBuyer] = useState();

	const levantarEstado = (estadoHijo) => {
		setEstadoPadre(estadoHijo)
	}

	const userBuyer = (compradorUser) => {
		setComprador(compradorUser)
	}

	const pruebaId = (idCompra) => {
		setIdBuyer(idCompra)
	}


	const EstadoPadreTrue = () => {


		const SiItems = () => {
			return (
				<>
					<h2 className="cart-title">Carrito</h2>
					{cart.map((product) => (
						<ItemCart key={product.id} product={product} />
					))}
					<p className='totalPriceCart'>total: ${totalPrice()}</p>
					<hr className='hr' />
					<FormBuy levantarEstado={levantarEstado} userBuyer={userBuyer} pruebaId={pruebaId} />
				</>
			);
		}

		const NoItems = () => {
			return (
				<>
					<div className="container__noItems">
						<h2 className="title__noItems">No hay elementos en el carrito</h2>
						<Link to="/productos" className="btn btn-dark">Ir a la tienda</Link>
					</div>
				</>
			);
		}


		return (
			<>
				{cart.length === 0 ? <NoItems /> : <SiItems />}

			</>
		);
	}

	const Comprado = () => {


		emptyCart();

		totalProducts();

		return (
			<>
				<div className="container__comprado">
					<h2 className="title__comprado">Gracias por su compra {comprador.nombre} !</h2>
					<h4 className="subtitle__comprado">Te enviaremos todos los detalles de la compra al mail "{comprador.email}"</h4>
					<h6 className="text__comprado">El id de su compra es: {idBuyer}.</h6>

					<Link to="/" className="btn btn-dark">Volver al inicio</Link>
				</div>
			</>
		);
	}


	return (
		<>
			{estadoPadre ? <Comprado /> : <EstadoPadreTrue />}

		</>
	);
};