const initialState = {
    favorite : []
}
export const FavoriteReducer = (state = initialState,action) =>{
    switch (action.type){

        case 'ADD_TO_FAVORITE' :
            const foundFavorite = state.favorite.find(el => el.id === action.payload.id)
            if(foundFavorite){
                return {...state,favorite: state.favorite.filter(el => el.id !== foundFavorite.id)}
            }else {
                return {...state, favorite: [...state.favorite, action.payload]}
            }
        default :
            return state
    }
}
