import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage";
import SignUp from "./SignUp/SignUp";
import LogInPage from "./LogInPage/LogInPage";
import Notfound from "./Notfound/Notfound";
import Description from "./Description/Description";

const intialbooks=[{
  id: 1,
  url:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
  title:'To Kill a Mockingbird',
  authors:'Harper Lee',
  status:'currentlyReading',
},

{
  url:'http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  title:'Satire TV',
  authors:'NYU Press',
  status:'wantToRead',
  id: 2,

},

{
  url:'http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  title:'Lords of Finance',
  authors:'Penguin',
  status:'read',
  id: 3,

},
];

interface bookData{
url:string;
title:string;
authors:string;
status:string;
id:number
}


function App() {
const [books, setBook] = useState(intialbooks);


const bookShelfHandler = (book:bookData, whichShelf:any) => {
  console.log(book);
  console.log(whichShelf);
  const updatedBooks = books.map(b =>{
    if(b.id === book.id){
      book.status = whichShelf;
      return book;
    }
    return b;
  });
  setBook(updatedBooks);
}

  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="/" element={<Home booksList={books} bookShelfHandler={bookShelfHandler}/>} />
          <Route path="Search" element={<SearchPage />} />
          <Route path="*" element={<Notfound />} />
          <Route path="book-description" element={<Description />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
