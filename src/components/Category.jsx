/*
import {useContext} from 'react'
import {Store} from '../state/StoreProvider'

const Category = ( { category } ) => {
    const { dispatch } = useContext(Store)
    const deleteCategory = (category) => {
        dispatch({ type: 'remove-category', payload: category})
    }
    return (
        <ul>
            <li>
                <h4>{category.title}</h4>
                <button onClick={() => deleteCategory(category)}>Delete</button>
                
            </li>
        </ul>
    )

}

export default Category

*/