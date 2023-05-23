const findById = require("./helperFunctions");

/*  should return the author when given a particuar id, used helper function  */
function findAuthorById(authors, id) {
  return findById(authors, id);
}

/*  should return a book when given a particular id  */
function findBookById(books, id) {
  const bookInfo = books.find((book) => book.id === id);
  return bookInfo;
}

/*  should return an array with two objects, borrowed and returned books   */
function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter((book) => !book.borrows[0].returned);
  const returnedBooks = books.filter((book) => book.borrows[0].returned);

  return [borrowedBooks, returnedBooks];
}

/*  should return an array for a book of all borrowers with their info and return status an limited to ten borrowers  */
function getBorrowersForBook(book, accounts) {
  const borrowRecords = book.borrows.map((borrow) => {
    const account = accounts.find((acc) => acc.id === borrow.id);
    return { ...borrow, ...account };
  });

  return borrowRecords.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
