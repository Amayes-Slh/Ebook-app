/* eslint-disable import/no-anonymous-default-export */
const API_URL = "http://gutendex.com/books/"

const fetchBooks = async (endpoint) => {
  return await fetch(`${API_URL}${endpoint}`).then (async(response) =>
     await response.json()
  );
};

export const getHomeBooks = async () => {
  return [
      {
          slug: "children",
          title: "Livres pour enfants",
          items: await fetchBooks("?topic=children"),
          
      },
      {
          slug: "fiction",
          title: "Fiction",
          items: await fetchBooks("?topic=fiction"),
      },
      {
          slug: "classics",
          title: "Classiques",
          items: await fetchBooks("?topic=classics&mime_type=image%2Fjpeg"),
      },
  ];
};

export const getBookInfo = async (bookId) => {
  let info = [];
  if (bookId) {
      info = await fetchBooks(bookId.toString());
  }
  return info;
};
