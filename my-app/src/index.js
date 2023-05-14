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
    <img src='./images/book.jpg' alt='zelda'/>

);

const Title = () => 
    <h2>The Legend of Zelda™</h2>;

    const Author = () => {
        const inlineHeadingStyles = {
            color: '#617d98',
            fontSize: '0.75rem',
            marginTop: '0.5rem',
        };
        return <h4 style={inlineHeadingStyles}> Jordan Moore </h4>;
    };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
