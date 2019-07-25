import { 
    GET_COIN_DATA_START,
    GET_COIN_DATA_SUCCESS,
    GET_COIN_DATA_FAIL,  
} from '../actions';

const initialState = {
    coinData: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COIN_DATA_START:
            console.log('starting to get')
            return state;
        case GET_COIN_DATA_SUCCESS:
            console.log('successfully got', action.payload)
            return{
                ...state,
                coinData: action.payload
            }
        case GET_COIN_DATA_FAIL:
            return state;
        default:
            return state;
    }
}