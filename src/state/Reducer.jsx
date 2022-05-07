
function reducer(state, action){
    switch(action.type){
        case 'add-category':
            return [...state, action.payload]

        case 'remove-category':
            return state.filter((category) => category.id !== action.payload.category.id)

        case 'get-category':
            return action.payload
        
        case 'add-chores':
            return action.payload

        case 'remove-chores':
            const parentCategory = state.find((category) => category.id === action.payload.id)
            if (parentCategory) {
                const filteredList = parentCategory.choresList.filter((task) => task.id !== action.payload.id)
                const newState = state.map((category) =>
                    category.id === parentCategory.id ? { ...parentCategory, choresList: filteredList } : category
                )
                return newState
            }
            return 

        case 'update-chores':
            return action.payload
        
        default:
            throw Error("Your request was denied")
    }
}

export default reducer