import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector((state) => state.user)
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            <h2>Users</h2>
            <ul>
                {users.map((user) =>
                    <li key={user.id}>{user.name}</li>
                )}
            </ul>
        </>
    );
};

export default UserList;