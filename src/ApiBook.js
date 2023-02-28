/* eslint-disable import/no-anonymous-default-export */
const API_URL = "https://gutendex.com/books/"

const fetchBooks = async (endpoint) => {
  return await fetch(`${API_URL}${endpoint}`).then (async(response) =>
     await response.json()
  );
};

export const test = async() => {
  const data = await fetch('http://localhost:5001/livre/all').then( res => res.json())
  return data 
}

export const getHomeBooks = async () => {
  const obj = 
  {
    slug: "children",
    title: "Liste des livres",
    items: await test(),
  }
  return obj

/*       {
          slug: "fiction",
          title: "Fiction",
          items: await fetchBooks("?topic=fiction"),
      },
      {
          slug: "classics",
          title: "Classiques",
          items: await fetchBooks("?topic=classics&mime_type=image%2Fjpeg"),
      }, */
};

export const getBookInfo = async (bookId) => {
  let info = [];
  if (bookId) {
      info = await fetchBooks(bookId.toString());
  }
  return info;
};
