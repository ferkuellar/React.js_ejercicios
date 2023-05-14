/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
// import ReactDOM from 'react-dom';


// function Greeting(){
//     return (
//         <>
//             <div className='someValue'>
//                 <Person/>
//                 <Message/>
//                 <h3>hello people</h3>
//                 <ul>
//                     <li>
//                         <a href="#">Hello World</a>
//                     </li>
//                 </ul>
//             </div>
//             <h2>Hellow World</h2>
//             <input type='text' name='' id=''/>
//         </>
//     );
// };

// const Person = () => <h2>Jhon Doe</h2>;
// const Message = () => {
//     return <p>This is my Message</p>
// };


// function Greeting(){
//     return React.createElement('h1', {}, 'Hello World');
// }

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function BookList(){
    return (
        <section className='booklist'>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    );
}

const Book = () => {
    return (
        <article className='book'>
            <Image/>
            <Title/>
            <Author/>
        </article>
    )
}

const Image = () => (
    <img src="https://m.media-amazon.com/images/I/51ZLFV0ZBwL._SX375_BO1,204,203,200_.jpg" alt="legend of zelda"/>
);

const Title = () => 
    <h2>The Legend of Zelda™: Tears of the Kingdom – The Complete Official Guide: Collector's Edition Hardcover – June 16, 2023 </h2>;

const Author = () => {
    return <h4> Piggyback</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
