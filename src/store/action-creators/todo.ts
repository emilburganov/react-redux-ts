import axios from "axios";
import {TodoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODO})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit
                }
            });
            dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data})
        } catch {
            dispatch({
                type: TodoActionTypes.FETCH_TODO_ERROR,
                payload: 'An error occurred while loading data!'
            })
        }
    }
}

export const setTodosPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}