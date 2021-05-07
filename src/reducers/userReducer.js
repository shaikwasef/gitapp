

export const userReducer = (state = null , action) => {
    switch (action.type){
        case "CHANGE_USER":
            return action.payload;
        default :
            return state;
    }
}