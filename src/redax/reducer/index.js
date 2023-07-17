import axios from "axios";

const initialState = {
    product : []
}


export const getProd = ()=>{
    return async (dispatch) =>{
        try {
            const url = await axios(`https://fakestoreapi.com/products`)
            const {data} = await url
            dispatch({type:'GET_PRODUCT', payload: data})
        }catch (e){
            console.log(e)
        }
    }
}

export const Reducer = (state = initialState, action)=> {
    switch (action.type){
        case  'GET_PRODUCT' :
            return {...state, product: action.payload}
        default :
            return state
    }
}