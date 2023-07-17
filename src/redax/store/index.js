import {applyMiddleware, combineReducers, createStore} from "redux";
import {Reducer} from "../reducer";
import {BasketReducer} from "../reducer/basketReducer";
import {FavoriteReducer} from "../reducer/favReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(combineReducers({
    main: Reducer,
    basket: BasketReducer,
    favorite: FavoriteReducer
}),composeWithDevTools(applyMiddleware(thunk)))

