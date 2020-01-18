import {storageRef} from "../../config/firebaseConfig";

export const createProject = (project) =>{
    // const {image} = project;

    return(dispatch, getState, {getFirebase, getFirestore, storage })=>{
        console.log(storage, 'storage')
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        // const uploadTask = storageRef.child(`images/ ${image[0].name}`).put(image);
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        })  .then(()=>{
                dispatch({type: 'CREATE_PROJECT', project});
        })
            .catch((err) =>{
                dispatch({type: 'CREATE_PROJECT_ERROR', err});
            });
    }
};
