import {useContext, useState} from 'react'
import {Store} from '../state/StoreProvider'



const ChoresForm = ({ categoryParent }) => {

    const {dispatch} = useContext(Store);
    const [userInput, setUserInput] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        const postChores = { title: userInput, categoryFK: categoryParent.id, done: false}
        //await fetch
        const newState = await createChores(postChores)
        //dispatch
        dispatch({type:'add-chores', payload: newState})
    }
    return(
        <form onSubmit={(e) => onSubmit(e)}>
            <label>
                <input placeholder='chores name' onChange={(e) => setUserInput(e.target.value)} value={userInput} />
            </label>
        </form>
    )

}

export default ChoresForm