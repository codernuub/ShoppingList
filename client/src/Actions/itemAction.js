import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';
import axios from 'axios';


export const getItems = () => dispatch => {
    dispatch(setItemLoading);

    axios
        .get('http://127.0.0.1:5000/api/items')
        .then((res) => dispatch(
            {
                type: GET_ITEMS,
                payload: res.data
            }
        ));
       
};

export const addItems = (items) => dispatch => {
    axios
        .post('api/items', items)
        .then(res => dispatch(
            {
                type: ADD_ITEMS,
                payload: res.data
            }
        ))
        .catch(err => console.log(err));
};

export const deleteItems = (id) => dispatch => {

    axios
        .delete(`http://127.0.0.1:5000/api/items/${id}`)
        .then(req => dispatch(
            {
                type: DELETE_ITEMS,
                payload: id
            }
        ))
        .catch(err => console.log(err));

};

export const setItemLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}