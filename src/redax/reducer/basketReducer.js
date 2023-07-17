const initialState = {
    basket : []
}
export const BasketReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_TO_BASKET' :
            const foundBasket = state.basket.find(el => el.id === action.payload.id)
            if(foundBasket){
                return {...state, basket: state.basket.map(el => el.id === foundBasket.id ? {...el, count: el.count + 1} : el)}
            }else {
                return {...state, basket: [...state.basket,{...action.payload,count: 1}]}
            }
        case 'DELETE_PRODUCT' :
            return {...state,basket: state.basket.filter(el => el.id !== action.payload.id)}
        case 'DEC_BASKET' :
            return {...state,basket: state.basket.map(el => {
                    if(el.id === action.payload.id){
                        return {...el,count: el.count !== 1 ? el.count - 1  : 1}
                    }else{
                        return el
                    }
                })}
        default :
            return state
    }
}