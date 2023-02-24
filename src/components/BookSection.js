import React, { useState, useEffect } from "react";
import "./BookSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BookSection({ title}) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((response) => response.json())
      .then((data) => setItems(data.results))
      .catch((error) => console.log(error));
  }, []);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
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
        {items &&
          items.map((item, key) => (
            <div className="BooksRow--item" key={key}>
              <img
                alt={item.title}
                src={`http://www.gutenberg.org/cache/epub/${item.id}/pg${item.id}.cover.medium.jpg`}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default BookSection;
