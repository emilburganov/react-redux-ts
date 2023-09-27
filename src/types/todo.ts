export interface TodoState {
    todos: unknown[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodosAction {
    type: TodoActionTypes.FETCH_TODO;
}

interface FetchTodosSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS;
    payload: unknown[];
}

interface FetchTodosErrorAction {
    type: TodoActionTypes.FETCH_TODO_ERROR;
    payload: string;
}

interface SetTodosPage {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction =
    FetchTodosAction
    | FetchTodosSuccessAction
    | FetchTodosErrorAction
    | SetTodosPage;