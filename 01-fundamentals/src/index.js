import React from 'react';
import ReactDOM from 'react-dom/client';
import BookList from './book_list/book_list';

// function Greeting() {
//   return (
//     <>
//       <div className="someValue">
//         <h2>Mi primer componente</h2>;
//         <ul>
//           <li>
//             <a href="./index.js">Hi</a>
//           </li>
//         </ul>
//       </div>
//       <h2>Hola mundo!</h2>
//       <input type="text" name="" id="" />
//     </>
//   );
// }

// function Greeting() {
//   return React.createElement('h2', {}, 'Hola mundo!');
// }

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>Eduardo</h2>;
// const Message = () => {
//   return <p>Este es mi mensaje </p>;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
