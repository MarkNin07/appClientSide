import React, {useContext} from 'react'
import { updateToDo } from '../services/ChoresServ'
import { Store } from '../state/StoreProvider'

const Update = ({updateBtn, setUpdateBtn}) => {
    const {dispatch} = useContext(Store)
    const updateTasks = async (event) =>{
        event.preventDefault()
        const bringVariables = {...updateBtn}
        const newState = await updateToDo(bringVariables)
        if(newState){
            dispatch({type: 'update-chores', payload: newState})
        }
    }
  return (
    <form onSubmit={(event) => updateTasks(event)}>
        <input onChange={(event) => setUpdateBtn({...updateBtn, title:event.target.value})} value={updateBtn.title} />
    </form>
  )
}

export default Update