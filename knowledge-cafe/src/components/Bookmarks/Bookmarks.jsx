import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) =>
{

    return (
        <div className="w-1/3 bg-slate-500">
            <h2 className="text-center text-3xl font-bold text-white py-4">Bookmarks: {bookmarks.length}</h2>
            {bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)}
        </div>
    );
};



Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;