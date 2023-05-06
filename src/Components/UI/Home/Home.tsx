// import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';
import Button from '../../Custom Components/Button/Button';
import Shelf from '../../BookData/Shelf/Shelf'

// *********************LAMA BA3ARFHA KEDA EL FILTER FUNCTION BETEDRAB 3SHAN KEDA 3AMELHA (ANY)
// interface  booksListData{
//   id: number;
//   url: string;
//   title: string;
//   authors: string;
//   status: string;
// }

const Home = ({booksList, bookShelfHandler}:any) => {
// **************************book hena bardo lama ba3melaha type (STRING) bydrab 
  const currentlyReading = booksList.filter((book:any) => book.status === 'currentlyReading');
  const wantToRead = booksList.filter((book:any) => book.status === 'wantToRead');
  const read = booksList.filter((book:any) => book.status === 'read');

  return (
    <div className={`${styles.app}`}>
      
        <div className={`${styles.listBooks}`}>
          <div className={`${styles.listBooksTitle} d-flex`}>
            <h1 className='text-center w-100 ms-5'>MyReads</h1>
            <Link to={'/login'} className='text-end me-3 mt-2'><Button className='px-4'>Login</Button></Link>
          </div>
          <div className={`${styles.listBooksContent}`}>
            <div>
              
            <Shelf sectionName='Currently Reading' books={currentlyReading} bookShelfHandler={bookShelfHandler}/>
            <Shelf sectionName='Want to Read' books={wantToRead} bookShelfHandler={bookShelfHandler}/>
            <Shelf sectionName='Read' books={read} bookShelfHandler={bookShelfHandler}/>

            </div>
          </div>

          <div className={`${styles.openSearch}`}>
            <Link to={'/search'}>Add a book</Link>
          </div>
        </div>
     
    </div>
  );
}

export default Home