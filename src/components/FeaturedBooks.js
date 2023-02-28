//import React, { useState, useEffect } from "react";
import "./FeaturedBooks.css";

function FeaturedBook({ book }) {
  //const [book, setBook] = useState(null);

/*   useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((response) => response.json())
      .then((data) => setBook(data));
      
  }, []); */
  const points =  Math.floor(Math.random() * 3) + 8;
  if (!book) {
    return <div>Loading...</div>;
  }

  let authors = "";
  authors=book.authors[0].name.replace(','," ")
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "50%",
       backgroundImage:`url(${book.formats["image/jpeg"]})`,
      }}
      
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{book.title}</div>
          <div className="featured--info">
            <div className="featured--points">{points}</div>
          </div>
          <div className="featured--description">
            {book.subjects.map((subject, key) => <p key={key}>{subject}</p>)}
            </div>
          <div className="featured--button">
            {/* <a href="/" className="featured--readbutton">
              Read
            </a> */}
            <a href={book.formats['text/html']} className="featured--mylistbutton">
              + Read
            </a>
          </div>
          <div className="featured--authors">
            <strong>Authors</strong>: {authors}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBook;
