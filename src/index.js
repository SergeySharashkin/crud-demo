import './sass/main.scss';
const URL_MANE = 'http://localhost:4040';
// const newBook = {
//     "title": "test book",
//     "autor": "Me",
//     "genges": "JS",
//     "rating": 10
// };
// function onPost(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${URL_MANE}/books`, options).then(res => res.json());
// }
// onPost({
//     title: "test book",
//     autor: "Me",
//     genges: ["JS"],
//     rating: 10
// }).then(book=>{console.log('hivay');
// console.log(book)});
// onPost({
//     title: "test book 2",
//     autor: "Me",
//     genges: ["JS", "TypeScript"],
//     rating: 9.6
// }).then(book=>{console.log('hivay');
// console.log(book)});

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${URL_MANE}/books/${bookId}`, options).then(res => res.json());
// }
// const upBook = {
//   title: 'testebel book',
//   autor: 'MeTo',
//   genges: ['pms'],
//   rating: 0,
// };
// updateBookById(upBook, 18);
function delBook(bookId) {
    const url = `${URL_MANE}/books/${bookId}`;
    const options = {
        method: 'DELETE'
    }
    return fetch(url, options).then(res => {
        if(res.ok) {
             return res.json();}
             throw new Error(res.statusText)
        })}
delBook(55).catch(error=> {console.log('hhh')});
// delBook(12);