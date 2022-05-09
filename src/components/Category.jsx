
import {useContext} from 'react'
import {Store} from '../state/StoreProvider'
import {deleteCategory} from '../services/CategoriesServ'
import Chores from './Chores'
import ChoresForm from './ChoresForm'

const Category = ( { category } ) => {
    const {state, dispatch } = useContext(Store)

    const deleteCat = async (category) => {
        const response = await deleteCategory(category)
        if(response.status == 200){
            dispatch({ type: 'remove-category', payload: category})
        }

    }
    return (
        <ul>
            <li>
                <h4>{category.categoryName}</h4>
                <button onClick={() => deleteCat(category)}>Delete</button>
                <ChoresForm categoryParent = {category} />
                {category.choresList.map((chore) => (
                    <Chores key={chore.id} chore = {chore} />
                ))}
                
            </li>
        </ul>
    )

}

export default Category
