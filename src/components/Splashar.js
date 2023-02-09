import React from "react";
import background from '../assets/img/home.png';

export const Splashar = () => {
    return(
        <div className="hero">
            <div className="card text-bg-dark border-0">
                <img src={background} className="card-img" alt='fondo' height='550px' />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}