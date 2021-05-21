import axios from "axios";

// Export an object containing methods we'll use for accessing the Google Books API

export default {
    searchBooks: function (query) {
        return axios.get(
            "https://www.googleapis.com/books/v1/volumes?q=inauthor:" + 
            query + 
            "&key=" +
            process.env.REACT_APP_API_KEY
        );
    }
};