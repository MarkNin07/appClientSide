import {useContext, useState} from 'react'
import {saveCategory} from '../services/CategoriesServ'
import {Store} from '../state/StoreProvider'

const CategoryForm = () => {
    const {dispath} = useContext(Store)
    const [title, setTitle] = useState("")
    const onSubmit = async(event) => {
        event.preventDefault()
        if(title){
            const newCateg = {categoryName: title}
            const response = await saveCategory(newCateg)
            dispatch({type: "add-category", payload: response})
            setTitle("")
        }
    }
    return(
        <form onSubmit={(event) => onSubmit(event)}>
            <label>
                <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Add Category" />
            </label>
        </form>
    )

}

export default CategoryForm