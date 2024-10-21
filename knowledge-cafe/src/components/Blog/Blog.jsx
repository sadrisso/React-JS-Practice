import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) =>
{

    const {author, cover, hashtags, img, posted_date, reading_time, title} = blog;

    return (
        <div className='mt-5 p-3' >

            <img src={cover} alt="" className='w-full h-[500px]'/>
            <div className='flex justify-between items-center p-5'>

                <div className='flex gap-3 items-center'>
                    <img src={img} alt="" className='w-[100px] h-[100px] rounded-full' />
                    <div>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex gap-2 items-center'>
                    <p>{reading_time} read</p>
                    <button onClick={handleAddToBookmark} className='text-2xl'><FaBookmark></FaBookmark></button>
                </div>

            </div>

            <div className='text-center'>
                <h1 className='text-3xl'>{title}</h1>

                <p className='text-gray-500'>
                    {hashtags.map((hash, key) => <span key={key}><a href="">{ hash}</a></span>)}
                </p>
            </div>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;