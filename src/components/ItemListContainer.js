import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs} from 'firebase/firestore';
import { ItemList } from "./ItemList";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Splashar } from "./Splashar";



export const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                
            </>
        );
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => { setFilter(data) }}>Todo</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("men's clothing") }}>Hombre</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("women's clothing") }}>Mujer</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("jewelery") }}>Joyas</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("electronics") }}>Electrodomesticos</button>
                </div>
                <ItemList data={filter == "" ? data : filter} />
            </>
        );
    }


    return (
            <div>
                <div>
                    <Splashar />
                </div>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1 className="display-6 fw-bolder text-center">Productos</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
    );
}