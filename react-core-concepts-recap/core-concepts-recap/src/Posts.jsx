import { useEffect, useState } from "react"
import Post from "./Post";

export default function Posts ()
{
    const [posts, setPosts] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        fetch(url).then((res) => res.json()).then((data) => setPosts(data))
    }, [])

    return(
        <div>
            <h2>Posts: {posts.length}</h2>
            {
                posts.map((post) => <Post post={post}></Post>)
            }
        </div>
    )
}