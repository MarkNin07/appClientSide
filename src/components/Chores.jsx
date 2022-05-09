import { useContext } from 'react'
import { deleteToDo, updateToDo } from '../services/ChoresServ'
import { Store } from '../state/StoreProvider'

const Chores = ({ chore }) => {
  const {state, dispatch } = useContext(Store)

  const deleteSingleChores = async (chore) => {
    const response = await deleteToDo(chore)
    if(response.status === 200){
      dispatch({ type: 'remove-chores', payload: chore })
    }
  }

  const updateCheck = async (chore) => {
    // fetch METHOD PUT
    const checkChores = { ...chore, done: !chore.done }
    const newState = await updateToDo(checkChores)
    if(newState){
      dispatch({ type: 'update-chores', payload: newState })
    }
  }

  return (
    <div style={{ border: 'solid black 1px' }}>
      <h3>{chore.title}</h3>
      <input type='checkbox' checked={chore.done} onChange={() => updateCheck(chore)} />
      <button onClick={() => deleteSingleChores(chore)}>Delete</button>
      <button>Update</button>
    </div>
  )
}

export default Chores