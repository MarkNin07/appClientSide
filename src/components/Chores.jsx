import { useContext } from 'react'
import { deleteToDo, updateToDo } from '../services/ChoresServ'
import { Store } from '../state/StoreProvider'

const Chores = ({ task }) => {
  const { dispatch } = useContext(Store)

  const deleteSingleChores = async (task) => {
    const response = await deleteToDo(task)
    if(response.status === 200){
      dispatch({ type: 'remove-chores', payload: task })
    }
  }

  const updateCheck = async (task) => {
    // fetch METHOD PUT
    const checkChores = { ...task, done: !task.done }
    const newState = await updateToDo(checkChores)
    if(newState){
      dispatch({ type: 'update-chores', payload: newState })
    }
  }

  return (
    <div style={{ border: 'solid black 1px' }}>
      <h3>{task.title}</h3>
      <input type='checkbox' checked={task.done} onChange={() => updateCheck(task)} />
      <button onClick={() => deleteSingleChores(task)}>Delete</button>
      <button>Update</button>
    </div>
  )
}

export default Chores