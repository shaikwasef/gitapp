export const userFoundReducer = (state = "none" , action) => {
    switch(action.type){
        case "USER_FOUND":
            return "user_found";
        case "USER_NOT_FOUND":
            return "user_not_found";
        case "NO_USER":
            return "no_user"
        default :
        return state;
    }
}