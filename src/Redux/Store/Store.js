import { combineReducers, createStore } from "redux"
import { Codes } from "../Reducers/CodeReducer"

const Store = () => {
    return (
        createStore(
            combineReducers({
                codes: Codes
            }),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
}

export default Store