
import {useContext, useState} from 'react'
import {Store} from '../state/StoreProvider'
import {deleteCategory} from '../services/CategoriesServ'
import Chores from './Chores'
import ChoresForm from './ChoresForm'
import Update from './Update'


const Category = ( { category } ) => {
    const {state, dispatch } = useContext(Store)
    const [updateBtn, setUpdateBtn] = useState({})
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
                {
                    updateBtn.title ? <Update updateBtn = {updateBtn} setUpdateBtn = {setUpdateBtn} /> :                 <ChoresForm categoryParent = {category} />

                }
                {category.choresList.map((chore) => (
                    <Chores key={chore.id} chore = {chore} setUpdateBtn = {setUpdateBtn}/>
                ))}
                
            </li>
        </ul>
    )

}

export default Category
