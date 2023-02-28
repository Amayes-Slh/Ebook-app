//import React, { useState, useEffect } from "react";
import "./BookSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BookSection({ title, books }) {
/*   const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5001/livre/all")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []); */


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
 
  return (
    <div className="BooksRow">
      <h2>{title}</h2>
      <Slider {...settings}>
        {books &&
          books.map((item, key) => (
            <div className="BooksRow--item" key={key}>
              <a href={item.formats['text/html']}>
                <img
                  alt={item.title}
                  src={item.formats['image/jpeg']}
                />
              </a>
              <p>{item.title.length > 50 ? item.title.slice(0,50): item.title}</p>
            </div>
          ))
          }
      </Slider>
    </div>
  );
}

export default BookSection;
