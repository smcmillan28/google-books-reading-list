import axios from "axios";

// Export objects containing methods we'll use for accessing the Google Books API and mongodb

export default {
    // Searches Google API for books by author
    searchBooks: function (query) {
        return axios.get(
            "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
            query +
            "&key=" +
            process.env.REACT_APP_API_KEY
        );
    },
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
}; 