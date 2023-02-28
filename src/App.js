import { useEffect, useState } from "react";
import "./App.css";
import FeaturedBook from "./components/FeaturedBooks";
import Header from "./components/Header";
import BookSection from "./components/BookSection";
import { API_URL } from "./components/Header";
//import { getHomeBooks, getBookInfo } from "./ApiBook";

function App() {
  const [booksList, setBooksList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);

  useEffect(() => {
    const loadAllBooks = async () => {
      // Liste de tous les livres
      let list = await fetch(`${API_URL}/livre/all`).then( res => res.json())
      setBooksList(list);

      // Un seul livre à l'affiche
/*       let originals = list.filter((oneBook) => oneBook.slug === "classics");

      let chooseRandomBook = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)

      );

      console.log(chooseRandomBook)


      let chosen = originals[0].items.results[chooseRandomBook];
      let chosenInfo = await getBookInfo(chosen.id);
 */
      setfeaturedData(list[4]);
    };

    loadAllBooks();
  }, []);

  const getData = (data) => {
    const featured = data.shift()
    setfeaturedData(featured)
    setBooksList(data)
  }

  return (
    <div className="page">
      <Header onKeyDown={getData}/>
      {featuredData && <FeaturedBook book={featuredData} />}
      <section className="lists">
          <BookSection title={booksList.length === 0 ? "" : "Liste des livres"} books={booksList} />
      </section>
    </div>
  );
}

export default App;
