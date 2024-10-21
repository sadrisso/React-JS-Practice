import PropType from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {title} = bookmark;
    return (
        <div className='bg-slate-300 p-4 text-center mb-4 mx-3 rounded-lg'>
            <h2>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropType.object
}

export default Bookmark;