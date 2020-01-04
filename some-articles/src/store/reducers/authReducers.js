const initState = {
    authError: ''
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log('login error');
            return {
                ...state,
                authError: 'Some Thing Wrong!'
            };
        case "LOGIN_SUCCESSFULLY":
            console.log('Login Successfully')
            return {
                ...state,
                authError: null
            }
        default:
            return state
    }

};

export default authReducer
