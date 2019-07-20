import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from '../Actions/types';
const initialState = {
    items: [],
    loading: false

}

export default function (state = initialState, Action) {
    switch (Action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: Action.payload,
                loading: false
            }
       
        case ADD_ITEMS:
            return {
                ...state,
                items: [Action.payload, ...state.items]
            }

            case DELETE_ITEMS:
            return {
                ...state,
                items: state.items.filter(item => item._id !== Action.payload)
            }

        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}