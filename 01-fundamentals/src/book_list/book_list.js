import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71N1ryT6iGL._AC_UL320_.jpg"
    alt="book_image"
  />
);

const Title = () => <h2>The Boys from Biloxi: A Legal Thriller</h2>;

const Author = () => {
  return <h4>John Grisham</h4>;
};

export default BookList;
