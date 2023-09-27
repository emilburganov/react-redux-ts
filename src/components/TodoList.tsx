import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const {todos, error, loading, page, limit} = useTypedSelector((state) => state.todo)
    const {fetchTodos} = useActions();

    useEffect(() => {
        fetchTodos(page, limit);
    }, [limit, page])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) =>
                    <li key={todo.id}>{todo.title}</li>
                )}
            </ul>
        </>
    );
};

export default TodoList;