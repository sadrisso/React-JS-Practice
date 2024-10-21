import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () =>
{

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("../../../public/blogs.json").then(res => res.json()).then(data => setBlogs(data))
    }, [])

    console.log(blogs)

    return (
        <div className="w-2/3 border">
            <h2>Blogs</h2>
            {blogs.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)}
        </div>
    );
};

export default Blogs;