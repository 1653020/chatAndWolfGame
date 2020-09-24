export const LoginAction = (userName) => {
    return {
        type: 'Login',
        payload: userName
    }
}

export const LogOutAction = () => {
    return {
        type: 'LogOut'
    }
}