import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";



const ProductDetails = () => {
    const [detail, setDetail] = useState({})
    const {id} = useParams()
    const getProduct = async ()=>{
        const url = await axios(`https://fakestoreapi.com/products/${id}`)
        const {data} = await url
        setDetail(data)
    }
useEffect(()=>{
getProduct()
},[detail])
    return (
        <div id='detail'>
            <div className="container w-[1140px]">
                <div className="product py-32 flex justify-between items-center">
                    <img width={300} src={detail.image} alt=""/>
                    <div className='bg-gray-400 w-[800px] py-28 px-[10px] rounded-[10px]'>
                    <h1 className='text-5xl mb-[50px]'>{detail.title}</h1>
                    <h1>{detail.description}</h1></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;