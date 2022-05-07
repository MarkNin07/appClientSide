import React, { createContext, useEffect, useReducer } from 'react'
import {getCategory} from '../services/CategoriesServ'
import reducer from './Reducer'

const Store = createContext({});

const StoreProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(reducer, [])

    const loadCategory = async () => {
        const data = await getCategory()
        console.log(data);
        dispatch({type: "get-category", payload: data })
    }


    useEffect(() => {
        loadCategory()
    }, [])

    return(
        <Store.Provider value={{state, dispatch}}>
            {children}
        </Store.Provider>
    )
}

export default StoreProvider

export {Store}