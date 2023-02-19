import React from "react";
import "./MovieSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieSection({ title, items }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <Slider {...settings}>
        {items.results.map((item, key) => (
          <div className="movieRow--item" key={key}>
            <img
              alt={item.original_title}
              src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MovieSection;
