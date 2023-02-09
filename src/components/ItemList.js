import React from "react";
import { Item } from "./Item";

export const ItemList = ({data = []}) => {

    
    return(
        data.map(film => <Item key={film.id} info={film}/>)
    );
}