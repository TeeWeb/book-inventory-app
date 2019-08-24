import uniqueId from 'lodash/uniqueId';

const books = [
  { title: 'Tale of Two Cities', id: uniqueId(), isCheckedOut: false, author: 'Charles Dickens', isbn: '6456' },
  { title: 'Harry Potter', id: uniqueId(), isCheckedOut: false, author: 'J.K. Rowling', isbn: '1223523345' },
  { title: 'To Kill a Mockingbird', id: uniqueId(), isCheckedOut: false, author: 'Harper Lee', isbn: '5324' },
  { title: 'Lord of the Rings', id: uniqueId(), isCheckedOut: false, author: 'J. R. R. Tolkien', isbn: '653645' },
  { title: 'Game of Thrones', id: uniqueId(), isCheckedOut: true, author: 'George R. R. Martin', isbn: '543234' },
  { title: 'Hitchhiker\'s Guide to the Galaxy', id: uniqueId(), isCheckedOut: false, author: 'Douglas Adams', isbn: '09869' },
  { title: 'Ulysses', id: uniqueId(), isCheckedOut: false, author: 'James Joyce', isbn: '87687' },
  { title: 'Adventures of Huckleberry Finn', id: uniqueId(), isCheckedOut: false, author: 'Mark Twain', isbn: '12523545' },
  { title: 'War and Peace', id: uniqueId(), isCheckedOut: false, author: 'Leo Tolstoy', isbn: '978678' },
  { title: 'Crime and Punishment', id: uniqueId(), isCheckedOut: true, author: 'Fyodor Dostoyevsky', isbn: '57467' },
  { title: 'Frankenstein', id: uniqueId(), isCheckedOut: true, author: 'Mary Shelley', isbn: '07687' },
];

export default {
  books: books,
  search: '',
  newBook: {
    title: '',
    author: '',
    isbn: '',
  }
};