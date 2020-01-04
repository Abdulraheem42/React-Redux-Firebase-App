const initState = {
    // projects: [
    //     {id: 1, title: "Article 1", content: "blah blah blah blah"},
    //     {id: 2, title: "Article 2", content: "blah blah blah blah"},
    //     {id: 3, title: "Article 3", content: "blah blah blah blah"},
    //     {id: 4, title: "Article 4", content: "blah blah blah blah"},
    // ]

};

const projectReducers = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("created Project", action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state
    }
};

export default projectReducers
