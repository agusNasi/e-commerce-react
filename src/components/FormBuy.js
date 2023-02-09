import { addDoc, collection, getFirestore} from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";


export const FormBuy = ({ levantarEstado, userBuyer, pruebaId }) => {


    const db = getFirestore();

    const { cart, totalPrice } = useCartContext();

    const finalCart = cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity }))


    const valorInicial = {
        nombre: '',
        email: '',
        tel: '',
    }

    const [user, setUser] = useState(valorInicial);
    const [estadoHijo, setEstadoHijo] = useState(true);



    const capturarInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const guardarDatos = async (e) => {
        if (user.nombre !== "" && user.email !== "" && user.tel !== "") {
            e.preventDefault();
            levantarEstado(estadoHijo);
            userBuyer(user);
            try {
                await addDoc(collection(db, 'orders'), {
                    ...user, finalCart, total: totalPrice()
                })
                    .then(({ id }) => pruebaId(id))
            } catch (error) {
                console.log(error);
            }


            setUser({ ...valorInicial })
        } else {
            alert("Por favor complete todos los campos.")

        }

    }

    return (
        <>
            <div className="container__form">
                <div className="container-form__title">
                    <h3>Ultimo paso</h3>
                    <h4>Para finalizar la compra complete los datos</h4>
                </div>
                <div>
                    <form className='formBuy' onSubmit={guardarDatos}>
                        <div className="card card-body">
                            <div className="form-group">
                                <input type='text' name='nombre' className="form-control mb-3" placeholder="Nombre"
                                    onChange={capturarInputs} value={user.nombre} />

                                <input type='text' name='email' className="form-control mb-3" placeholder="Email"
                                    onChange={capturarInputs} value={user.email} />

                                <input type='text' name='tel' className="form-control mb-3" placeholder="Telofono"
                                    onChange={capturarInputs} value={user.tel} />
                            </div>

                            <button className="btn btn-dark">
                                Finalizar Compra
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}