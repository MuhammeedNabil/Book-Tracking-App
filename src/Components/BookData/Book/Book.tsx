import React from "react";
import styles from "./Book.module.css";
import { bookData } from '../../UI//Home/Home'

interface data {
  book: any;
  bookShelfHandler?:any;
}

const Book = ({ book, bookShelfHandler }: data) => {

  return (
    <div className={`${styles.book}`}>
      <div className={`${styles.bookTop}`}>
        <div
          className={`${styles.bookCover}`}
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail || book.imageLinks.thumbnail})`,  
          }}
        ></div>
        <div className={`${styles.bookShelfChanger}`}>
          <select defaultValue={book.status ? book.status : "none"} onChange={(e) => bookShelfHandler(book, e.target.value)}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className={`${styles.bookTitle}`}>{book.title}</div>
      <div className={`${styles.bookAuthors}`}>{book.authors}</div>
    </div>
  );
};

export default Book;
