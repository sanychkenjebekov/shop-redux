import React, {useEffect} from 'react';
import ProductCard from "./ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {getProd} from "../../redax/reducer";

const Product = () => {
    // const data = [
    //     {
    //         id:1,
    //         title: 'Love Republic',
    //         description: 'Вискоза - 80%, Полиэстер - 20%',
    //         price: 4000,
    //         countInStock: 2,
    //         rating: 4,
    //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
    //     },
    //
    //     {
    //         id:2,
    //         title: 'The Select Moscow ',
    //         description: 'Вискоза - 80%, Полиэстер - 20%',
    //         price: 2300,
    //         countInStock: 2,
    //         rating: 3,
    //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg'
    //     },
    //     {
    //         id:3,
    //         title: 'A-A Awesome Apparel ',
    //         description: 'Вискоза - 80%, Полиэстер - 20%',
    //         price: 9000,
    //         countInStock: 2,
    //         rating: 5,
    //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg'
    //     },
    //     {
    //         id:4,
    //         title: 'Jolifashn',
    //         description: 'Вискоза - 80%, Полиэстер - 20%',
    //         price: 5000,
    //         countInStock: 2,
    //         rating: 2,
    //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
    //     },
    //     {
    //         id:5,
    //         title: 'Jolifashn',
    //         description: 'Вискоза - 80%, Полиэстер - 20%',
    //         price: 5000,
    //         countInStock: 2,
    //         rating: 1,
    //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
    //     },
    //     {
    //         id:6,
    //         title: 'Jolifashn',
    //         description: 'Вискоза - 80%, Полиэстер - 20%',
    //         price: 5000,
    //         countInStock: 2,
    //         rating: 3,
    //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
    //     },{
    //         id:7,
    //         title: 'Love Republic',
    //         description: 'Вискоза - 80%, Полиэстер - 20%',
    //         price: 4000,
    //         countInStock: 2,
    //         rating: 4,
    //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
    //     },{
    //         id:8,
    //         title: 'Love Republic',
    //         description: 'Вискоза - 80%, Полиэстер - 20%',
    //         price: 4000,
    //         countInStock: 2,
    //         rating: 4,
    //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
    //     }
    //
    // ]
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.main)
    useEffect(()=>{
        dispatch(getProd())
    }, [])
// dispatch({type:'GET_PRODUCT', payload: data})
    return (
        <div id='product'>
            <div className="container">
                <div className="product py-20 flex flex-wrap gap-3.5">
                    {
                        product.map(el => <ProductCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;