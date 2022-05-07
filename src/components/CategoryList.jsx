
import React, { useContext } from 'react'
import {Store} from '../state/StoreProvider'
import Category from './Category'


const CategoryList = () => {
    
    const {state, dispatch} = useContext(Store) 

    console.log(state);

    return (
        <>
            {state.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </> 
    )


}

export default CategoryList
