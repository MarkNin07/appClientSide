
function reducer(state, action){
    switch(action.type){
        case 'add-category':
            //done
            return [...state, action.payload]

        case 'remove-category':
            //done
            return state.filter((category) => category.id !== action.payload.id)

        case 'get-category':
            //done
            return action.payload
        
        case 'add-chores':
            //done
            const newState = state.map((category) => {
                if(category.id === action.payload.id) {
                    return action.payload
                }
                return category
            })

            return newState

        case 'remove-chores':
            // done
            const parentCategory = state.find((category) => category.id === action.payload.fkCategoryId)
            if (parentCategory) {
                const filteredList = parentCategory.choresList.filter((task) => task.id !== action.payload.id)
                const newState = state.map((category) =>
                    category.id === parentCategory.id ? { ...parentCategory, choresList: filteredList } : category
                )
                return newState
            }
            return state

        case 'update-chores':
            return action.payload
        
        default:
            throw Error("Your request was denied")
    }
}

export default reducer