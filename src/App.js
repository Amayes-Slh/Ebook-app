import { useEffect, useState } from "react";
import "./App.css";
import FeaturedBook from "./components/FeaturedBooks";
import Header from "./components/Header";
import BookSection from "./components/BookSection";
import { getHomeBooks, getBookInfo } from "./ApiBook";

function App() {
  const [booksList, setBooksList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);

  useEffect(() => {
    const loadAllBooks = async () => {
      // Liste de tous les livres
      let list = await getHomeBooks();
      setBooksList(list);
      console.log(list);

      // Un seul livre à l'affiche
      let originals = list.filter((oneBook) => oneBook.slug === "classics");

      let chooseRandomBook = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)

      );

      console.log(chooseRandomBook)


      let chosen = originals[0].items.results[chooseRandomBook];
      let chosenInfo = await getBookInfo(chosen.id);

      setfeaturedData(chosenInfo);
    };

    loadAllBooks();
  }, []);

  return (
    <div className="page">
      <Header />
      {featuredData && <FeaturedBook book={featuredData} />}
      <section className="lists">
        {booksList.map((item, key) => (
          <BookSection key={key} title={item.title} books={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
