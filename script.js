class Book {
    constructor(title, author, genre) {
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.available = true;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(title, author, genre) {
      const book = new Book(title, author, genre);
      this.books.push(book);
    }
  
    updateBooksTable() {
      const tableBody = document.getElementById('booksTableBody');
      tableBody.innerHTML = '';
  
      for (const book of this.books) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.genre}</td>
          <td>${book.available ? 'Available' : 'Borrowed'}</td>
        `;
        tableBody.appendChild(row);
      }
    }
  }
  
  const library = new Library();
  
  const addBookForm = document.getElementById('addBookForm');
  addBookForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const genreInput = document.getElementById('genreInput');
  
    const title = titleInput.value;
    const author = authorInput.value;
    const genre = genreInput.value;
  
    library.addBook(title, author, genre);
    library.updateBooksTable();
  
    titleInput.value = '';
    authorInput.value = '';
    genreInput.value = '';
  });
  