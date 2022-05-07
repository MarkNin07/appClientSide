import { useContext } from 'react'
import { Store } from '../state/StoreProvider'

const Chores = ({ chore }) => {
  const { dispatch } = useContext(Store)

  const deleteSingleChores = async (chore) => {
    // fetch METHOD DELETE
    dispatch({ type: 'remove-chore', payload: chore })
  }

  const updateSinglechore = async (chore) => {
    // fetch METHOD PUT
    // const checkchore = { ...chore, done: !chore.done }
    // const newState = await fetch('su backend', { method: 'PUT', body: JSON.stringify(checkchore) })
    // dispatch({ type: 'update-chore', payload: newState })
    dispatch({ type: 'update-chore', payload: { ...chore, done: !chore.done } })
  }

  return (
    <div style={{ border: 'solid black 1px' }}>
      <h3>{chore.title}</h3>
      <input type='checkbox' value={chore.done} onClick={() => updateSinglechore(chore)} />
      <button onClick={() => deleteSingleChores(chore)}>delete</button>
      <button>update</button>
    </div>
  )
}

export default Chores