import React, { useRef, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchInput from "../components/SearchInput";
import SearchCard from "../components/SearchCard";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

function Search() {
    const inputRef = useRef();

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        inputRef.current.value = "";
    };

    const bookSearch = () => {
        console.log(inputRef.current.value);
        API.searchBooks(inputRef.current.value)
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                const info = res.data.items;
                console.log(info);
                setImage(info[0].volumeInfo.imageLinks.thumbnail);
                setTitle(info[0].volumeInfo.title);
                setAuthor(info[0].volumeInfo.authors);
            });
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <div>
                            <h5>Search for your favorite books below, then hit save to add to your library!</h5>
                        </div>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <SearchInput
                    searchTerm={inputRef}
                    handleSubmit={handleSubmit}
                    searchBooks={bookSearch}
                />
            </Row>
            <Row>
                <h2 style={{ textAlign: "center ", textDecoration: "underline " }}>Search Results: </h2>
            </Row>
            <Row>
                <SearchCard 
                    image={image}
                    title={title}
                    author={author}
                />
            </Row>
        </Container>
    )
}

export default Search;