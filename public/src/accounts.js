const findById = require("./helperFunctions");

/*    should return account when given a particular id. used helper function to solve.    */
function findAccountById(accounts, id) {
  return findById(accounts, id);
}  
 
/*  should return list of accounts by last name.   */ 
function sortAccountsByLastName(accounts) {
   accounts.sort((lastA, lastB) => {
    return lastA.name.last < lastB.name.last ? -1 :1
  });
   return accounts;
}

/*  should return number of times an account has created a borrow record  */
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((count, book) => {
    return count + book.borrows.filter(borrow => borrow.id === account.id).length;
  }, 0);
}

/*  should return all the books taken out by an account with the author info  */
function getBooksPossessedByAccount(account, books, authors) {

  return books.filter((book) => 
    book.borrows.some((borrow) => 
      borrow.id === account.id && !borrow.returned))
      .map((book) => {
        book.author = authors.find((author) => author.id === book.authorId);

    return book;
});
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
