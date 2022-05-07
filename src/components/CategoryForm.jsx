import {useContext} from 'react'
import {Store} from '../state/StoreProvider'

const CategoryForm = () => {
    const {dispath} = useContext(Store)
    const onSubmit =(e) => {
        e.preventDefault()
    }
    return(
        <form onSubmit={(e) => onSubmit(e)}>
            <label>
                <input placeholder='category name' />
            </label>
        </form>
    )

}

export default CategoryForm