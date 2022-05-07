import React, { createContext, useReducer } from 'react'
import reducer from './Reducer'
//Here's the initial state of our app. It's an object
const initialState = [
    {
        
        categoryId: '',
        categoryName: '',
        listOfChores: [
            {
                id: '',
                title: '',
                categoryId: '',
                done: ''
            }
        ]
        
    }
]

const Store = createContext(initialState);

const StoreProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(reducer, initialState)
/*
    useEffect(() => {

    }, [])
*/
    return(
        <Store.Provider value={{state, dispatch}}>
            {children}
        </Store.Provider>
    )
}

export default StoreProvider

export {Store, initialState}