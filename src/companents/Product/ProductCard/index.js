import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { AiTwotoneHeart} from "react-icons/ai";
import {Link, useParams} from "react-router-dom";
import {BsBasket3} from "react-icons/bs";

const ProductCard = ({el}) => {
    const dispatch = useDispatch()
    const {favorite} = useSelector(state => state.favorite)
    const {basket} = useSelector(state => state.basket)
    const addBasket=()=>{
        dispatch({type:'ADD_TO_BASKET', payload: el})
    }
    const addFavorite=()=>{
        dispatch({type:'ADD_TO_FAVORITE', payload: el})
    }
    const heart = favorite.some(some => some.id === el.id)
    const btn = basket.some(some => some.id === el.id)
    return (
           <div className="productCard">
                <div
                    className="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to={`/product/details/${el.id}`}>
                        <img className="rounded-t-lg w-[350px] h-[390px]" src={el.image} alt=""/>
                    </Link>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-[70px]">{el.title.slice(0,45)}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[100px]">{el.description.slice(0,120)}</p>
                        <div className="btn flex justify-between items-center">
                        {
                            btn ? <Link to={'/basket'}><button type="button"
                                          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                   <BsBasket3/>
                            </button></Link>
                                :
                                <button
                                    onClick={addBasket}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {el.price} $
                                </button>
                        }
                            <button onClick={()=> {
                                addFavorite()
                            }} type="button"
                                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                <AiTwotoneHeart className={heart ? "text-red-700" : 'text-white'}/>
                            </button>

                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ProductCard;