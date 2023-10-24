import {FC, useEffect} from "react";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IUser} from "../models/IUser";

const UserList: FC = () => {
    const {users, error, loading} = useTypedSelector((state) => state.user);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <>
            <h2>Users</h2>
            <ul>
                {users.map((user: IUser) =>
                    <li key={user.id}>{user.name}</li>,
                )}
            </ul>
        </>
    );
};

export default UserList;