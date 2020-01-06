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

export const signUp = (newUser) =>{
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            console.log(resp, 'response')
            return firestore.collection('user').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESSFULLY' })
        }).catch((error) => {
            dispatch({ type: 'SIGNUP_ERROR', error })
        })
    }
};
