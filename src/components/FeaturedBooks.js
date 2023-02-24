import React, { useState, useEffect } from "react";
import "./FeaturedBooks.css";

function FeaturedBook() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((response) => response.json())
      .then((data) => setBook(data));
      
  }, []);

  if (!book) {
    return <div>Loading...</div>;
  }

  let authors = "";
  authors=book.results[4].authors[0].name
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "50%",
       backgroundImage:`url(${book.results[4].formats["image/jpeg"]})`,
      }}
      
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{book.results[4].title}</div>
          <div className="featured--info">
            <div className="featured--points">{book.rating}</div>
          </div>
          <div className="featured--description">The Complete Works of William Shakespeare is a comprehensive collection of all the plays, sonnets, and poems written by Shakespeare. This volume offers detailed notes and commentary to help readers fully appreciate the language, characters, and themes. It is a must-have for any lover of literature, providing the most accurate and authoritative text available. Shakespeare's works continue to captivate audiences with their timeless relevance and profound insights into the human experience.</div>
          <div className="featured--button">
            {/* <a href="/" className="featured--readbutton">
              Read
            </a> */}
            <a href="https://www.gutenberg.org/ebooks/100.html.images" className="featured--mylistbutton">
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
