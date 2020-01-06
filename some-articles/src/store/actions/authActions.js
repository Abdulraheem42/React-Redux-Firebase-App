export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    )
        .then(()=>{
        dispatch({type: "LOGIN_SUCCESSFULLY"});
    })
        .catch((error)=>{
        dispatch({type: "LOGIN_ERROR", error});
    })

    }
};


export const signOut = () =>{
    return( dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(()=>{
            dispatch({type: "LOGOUT_SUCCESSFULLY"});
        })
    }
};
