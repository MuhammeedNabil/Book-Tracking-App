import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Shelf from "../../BookData/Shelf/Shelf";
import * as booksAPI from "../../../BooksAPI";

// Bouns Components Import
import Button from "../../Custom Components/Button/Button";
import Card from "../../Custom Components/Card/Card";

 export interface bookData {
  title: string;
  authors: string;
  shelf: string;
  id: number;
}

const Home = () => {
  const [books, setBooks] = useState<bookData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    booksAPI.getAll().then((data) => setBooks(data));
    setIsLoading(false);
  }, []);

  // ---------------------Handler function to update the shelf of the book-------------------
  const bookShelfHandler = (book: bookData, whichShelf: string) => {
    const updatedBooks: bookData[] = books.map((b: bookData) => {
      if (b.id === book.id) {
        book.shelf = whichShelf;
        return book;
      }
      return b;
    });
    setBooks(updatedBooks);
    booksAPI.update(book, whichShelf).then((data) => data);
  };
  // ------------------------------------------------------------------------------------ //

  // --------------------------Filter the books on thier shelf----------------------------
  const currentlyReading = books.filter(
    (book: bookData) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book: bookData) => book.shelf === "wantToRead");
  const read = books.filter((book: bookData) => book.shelf === "read");
  // ------------------------------------------------------------------------------------ //
  return (
    <div className={`${styles.app}`}>
      <div className={`${styles.listBooks}`}>
        <div className={`${styles.listBooksTitle} d-flex`}>
          <h1 data-testid='homeTitle' className="text-center w-100 ms-5">MyReads</h1>
          <Link data-testid='loginLink' to={"/login"} className="text-end me-3 mt-2">
            <Button className="px-4">Login</Button>
          </Link>
        </div>
        {!isLoading ? 
          <div className={`${styles.listBooksContent}`}>
            <div>
              <Shelf
                sectionName="Currently Reading"
                books={currentlyReading}
                bookShelfHandler={bookShelfHandler}
              />
              <Shelf
                sectionName="Want to Read"
                books={wantToRead}
                bookShelfHandler={bookShelfHandler}
              />
              <Shelf
                sectionName="Read"
                books={read}
                bookShelfHandler={bookShelfHandler}
              />
            </div>
          </div>
         : (
          <Card>
            <p className="text-white text-center">Loading.....</p>
          </Card>
        )}

        <div className={`${styles.openSearch}`}>
          <Link data-testid='goToSearch' to={"/search"}>Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
