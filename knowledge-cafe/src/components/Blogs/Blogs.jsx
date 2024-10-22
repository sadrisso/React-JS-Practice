import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark, handleReadingTime}) =>
{

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("../../../public/blogs.json").then(res => res.json()).then(data => setBlogs(data))
    }, [])


    return (
        <div className="w-2/3">
            <h2 className="text-center text-2xl">Blogs</h2>
            {blogs.map((blog, idx) => <Blog key={idx} blog={blog} handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blog>)}
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func
}

export default Blogs;