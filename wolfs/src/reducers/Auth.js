const initialState = {
    isLogin: false,
    userName: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Login':
            {
                const newState = state
                newState.isLogin = true
                newState.userName = action.payload
                return newState
            }
        case 'LogOut':
            {
                const newState = state
                newState.isLogin = false
                newState.userName = null
                return newState
            }
        default:
            return state
    }
}

export default authReducer