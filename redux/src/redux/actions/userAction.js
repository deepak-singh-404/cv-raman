


export const setUser = (data) => {
    return {
        type: "SET_USER",
        payload: data
    }

}

export const logout = () => {
    return {
        type: "USER_LOGOUT"
    }
}