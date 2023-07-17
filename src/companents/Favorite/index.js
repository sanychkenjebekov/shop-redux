import React from 'react';
import ProductCard from "../Product/ProductCard";
import {useSelector} from "react-redux";

const Favorite = () => {
    const {favorite} = useSelector(state => state.favorite)
    console.log(favorite)
    return (
        favorite.length === 0 ? <h1 className='py-32 text-black text-center'>Пустой</h1> :
        <div id='product'>
            <div className="container">
                <div className="product py-20 flex flex-wrap gap-3.5">
                    {
                        favorite.map(el => <ProductCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorite;