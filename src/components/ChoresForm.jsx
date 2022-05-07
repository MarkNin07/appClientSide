import {useContext, useState} from 'react'
import {saveToDo} from '../services/ChoresServ'
import {Store} from '../state/StoreProvider'


const ChoresForm = ({ categoryParent }) => {
    const {dispatch} = useContext(Store);
    const [userInput, setUserInput] = useState('')
    const onSubmitChores = async (e) => {
        e.preventDefault()
        const postChores = { title: userInput, categoryId: categoryParent.id, done: false}
        
        const newState = await saveToDo(postTodo)
        if(newState){
            dispatch({type:'add-chores', payload: newState})
            setUserInput("")
        }
    }

    return(
        <form onSubmit={(e) => onSubmitChores(e)}>
            <label>
                <input placeholder='Add Chores' onChange={(e) => setUserInput(e.target.value)} value={userInput} />
            </label>
        </form>
    )
}

export default ChoresForm