import{
    TRAER_CLIMA,
} from "./action"


const initialState ={
    allClima:[],
}


const reducer = (state = initialState,action)=>{
    switch (action.type){
        case TRAER_CLIMA:
          const newState = {
            ...state,
            allClima: action.payload,
        };
        console.log("allClima:", newState.allClima); // Aquí está el console.log
        return newState;

        default:
            return state;
    }
}

export default reducer;
