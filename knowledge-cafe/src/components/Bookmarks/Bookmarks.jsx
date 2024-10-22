import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) =>
{

    return (
        <div className="w-1/3 bg-slate-500">
            <h2 className="text-center text-3xl font-bold text-white py-4">Bookmarks: {bookmarks.length}</h2>
            <p className='text-3xl text-center text-white font-bold bg-slate-400 p-5 m-3'>Reading Time: {readingTime}min</p>
            {bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)}
        </div>
    );
};



Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;