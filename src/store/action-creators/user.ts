import {UserActionTypes} from "../../types/user";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'An error occurred while loading data!'
            })
        }
    }
}