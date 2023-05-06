import React from 'react'
import styles from './SearchPage.module.css'
import { Link } from 'react-router-dom';


const SearchPage = () => {
  return (
    <div className={`${styles.searchBooks}`}>
    <div className={`${styles.searchBooksBar}`}>
      <Link
        className={`${styles.closeSearch}`}
        to={'/'}
      >
        Close
      </Link>
      <div className={`${styles.searchBooksInputWrapper}`}>
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
        />
      </div>
    </div>
    <div className={`${styles.searchBooksResults}`}>
      <ol className={`${styles.booksGrid}`}></ol>
    </div>
  </div>
  )
}

export default SearchPage