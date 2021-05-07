export const repositoryReducer = (state = [] , action) =>{
    switch (action.type){
        case "REPO_LIST_UPDATE":
            return action.payload;
        default :
            return state;
    }
}