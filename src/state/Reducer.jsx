
function reducer(state, action){
    const {type, payload} = action
    switch(type){
        case 'add-category':
            return [...state, payload]

        case 'remove-category':
            return state.filter((category) => category.id !== payload)

        case 'get-categories':
            return payload
        
        case 'add-chores':
            return payload

        case 'remove-chores':
            return 

        case 'update-chores':
            return state        
    }
}

export default reducer