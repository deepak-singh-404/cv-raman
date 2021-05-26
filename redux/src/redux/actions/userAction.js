const setUser = (data) => {
    return {
        type: "SET_USER",
        payload: data
    }

}

const logout = () => {
    return {
        type: "USER_LOGOUT"
    }
}