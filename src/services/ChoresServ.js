const ENDPOINT = 'http://localhost:8081/api'

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const saveToDo = async (todo) => {
  const response = await fetch(`${ENDPOINT}/create/chores`, { method: 'POST', body: JSON.stringify(todo), headers: HEADERS})
  const data = await response.json()
  return data
}

export const updateToDo = async (todo) => {
  const response = await fetch(`${ENDPOINT}/update/chores`, { method: 'PUT', body: JSON.stringify(todo), headers: HEADERS })
  const data = await response.json()
  return data
}

export const deleteToDo = async (todo) => {
  const response = await fetch(`${ENDPOINT}/delete/chores/${todo.id}`, { method: 'DELETE' })
  return response
}