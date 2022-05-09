const ENDPOINT = 'http://localhost:8081/api'


const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

export const getCategory = async () => {
  const response = await fetch(`${ENDPOINT}/get/categories`)
  const data = await response.json()
  return data
}

export const saveCategory = async (category) => {
    const response = await fetch(`${ENDPOINT}/create/category`, {method: "POST", body: JSON.stringify(category), headers: HEADERS})
    const data = await response.json()
    return data
  }

  export const deleteCategory = async (category) => {
    const response = await fetch(`${ENDPOINT}/delete/category/${category.id}`, {method: "DELETE"})
    return response;
  }