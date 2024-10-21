import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark}) =>
{

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("../../../public/blogs.json").then(res => res.json()).then(data => setBlogs(data))
    }, [])

    console.log(blogs)

    return (
        <div className="w-2/3">
            <h2 className="text-center text-2xl">Blogs</h2>
            {blogs.map((blog) => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark}></Blog>)}
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
}

export default Blogs;