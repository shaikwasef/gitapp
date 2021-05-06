export const repositoryReducer = (state = [] , action) =>{
    switch (action.type){
        case "RESPOSITORY LIST UPDATE":
            return action.payload;
        default :
            return state;
    }
}