
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App()
{

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark)
  }

  const handleReadingTime = (time, id) => {
    setReadingTime(parseFloat(readingTime) + parseFloat(time))
    const remainingBookmark = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex mt-4'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
