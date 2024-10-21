import PropTypes from 'prop-types';

const Blog = ({blog}) =>
{

    const {author, cover, hashtags, id, img, posted_date, reading_time, title} = blog;

    return (
        <div className='border border-black'>
            <h2>{id}</h2>
            <img src={cover} alt="" className='w-full h-[500px]'/>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;