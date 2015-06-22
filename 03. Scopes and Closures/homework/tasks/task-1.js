/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [],
			categories = [];
		
		function listBooks(options) {
			if(!options){
				return books;
			} else{
				//TODO: implement sorting
			}
				
		}
		
		function addBook(book) {
			bookIsValid(book)
			book.ID = books.length + 1;
			addCategory(book.category);
			books.push(book);
	
			return book;	
		}
		
		function bookIsValid(book){
			var index,
				len,
				isbnTest = /\d{10,13}/,
				bookCategory = book.category,
				bookTitle = book.title,
				bookAuthor = book.author,
				bookISBN = book.isbn;
				
			if(bookTitle.length < 2 || bookTitle.length > 100){
				throw "Error: book title must be between 2 and 100 characters long";
			} else if( bookCategory.length < 2 || bookCategory.length > 100){
				throw "Error: book category must be between 2 and 100 characters long";
			} else if( !bookAuthor.length ){
				throw "Error: book author must not be empty"
			} else{
				if (!isbnTest.test(bookISBN.toString())){
					throw "Error: book isbn must be between 10 and 13 digits"
				}
				
				for (index = 0, len=books.length; index < len; index++) {
					if(book.isbn === books[index].isbn){
						throw "Error: ISBN number must be unique!"
					} else if(book.name === books[index].name){
						throw "Error: book name must be unique!"
					}
				}
			}
			
			return true;
		}
		
		//Categories
		function addCategory(category){
			if(categories.indexOf(category) === -1){
				categories.push(category);
			}
			return category;
		}
		
		function listCategories() {
			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	
	
				
	return library;
}

solve();

// module.exports = solve;