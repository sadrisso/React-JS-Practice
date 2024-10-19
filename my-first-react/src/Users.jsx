import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function User ()
{
    const [users, setUsers] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        fetch(url).then((res) => res.json()).then((data) => setUsers(data))
    }, []);

    return(
        <div>
            <h1>User: {users.length}</h1>
            {
                users.map(user => <Friend user={user}></Friend>)
            }
        </div>
    )
}