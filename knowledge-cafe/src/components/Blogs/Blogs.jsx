import { useEffect, useState } from "react";

const Blogs = () =>
{

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("../../../public/blogs.json").then(res => res.json()).then(data => setBlogs(data))
    }, [])

    console.log(blogs)

    return (
        <div>
            <h2>Blogs: {blogs.length}</h2>
        </div>
    );
};

export default Blogs;