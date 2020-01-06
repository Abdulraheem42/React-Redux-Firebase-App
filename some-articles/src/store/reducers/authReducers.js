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
            console.log('Login Successfully');
            return {
                ...state,
                authError: null
            };
        case "LOGOUT SUCCESSFULLY":
            console.log('LogOut Successfully');
            return state
        case "SINGUP_SUCCESSFULLY":
            console.log('SignUp Successfully');
            return {
                ...state,
                authError: null
            };
        case "SIGNUP_ERROR":
            console.log('SignUp Error');
            return {
                ...state,
                authError: action.error.message
            };
        default:
            return state
    }

};

export default authReducer
