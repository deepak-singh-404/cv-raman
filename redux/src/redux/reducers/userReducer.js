const initialState = {
    user: {},
    isAuthenticated: false
}


//action => object

// {
//     type: "ADD_USER",
//     payload: data

// }


// what is datatype of action?

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        case "USER_LOGOUT":
            return {
                ...state,
                user: {},
                isAuthenticated:false
            }
        default:
            return state
    }
}

export default userReducer