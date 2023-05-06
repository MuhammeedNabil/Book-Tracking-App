import styles from "./Shelf.module.css";
import Book from "../Book/Book";

interface data {
  sectionName: string;
  books: any;
  bookShelfHandler:any
}

const Shelf = ({ sectionName, books, bookShelfHandler }: data) => {
  return (
    <div className={`${styles.bookshelf}`}>
      <h2 className={`${styles.bookshelfTitle}`}>{sectionName}</h2>
      <div className={`${styles.bookshelfBooks}`}>
        <ol className={`${styles.booksGrid}`}>
          {books.map((b: any) => (
            <li key={b.id}>
              <Book book={b} bookShelfHandler={bookShelfHandler}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
