import React from "react";
import { Link } from "react-router-dom";


export const Item = ({ info }) => {

    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={info.id}>
                    <img src={info.image} className="card-img-top" alt={info.title} height="250px" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">{info.title.substring(0, 12)}...</h5>
                        <p className="card-text lead fw-bold">${info.price}</p>
                        <Link to={`/detalle/${info.id}`} className="btn btn-outline-dark">Detalles</Link>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
