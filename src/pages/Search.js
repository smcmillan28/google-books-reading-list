import React from "react";
import Jumbotron from "../components/Jumbotron";
import SearchInput from "../components/SearchInput";
import SearchCard from "../components/SearchCard";
import { Col, Row, Container } from "../components/Grid";

function Search() {
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
                <SearchInput />
            </Row>
            <Row>
                <h2 style={{ textAlign: "center ", textDecoration: "underline "}}>Search Results: </h2>
            </Row>
            <Row>
                <SearchCard />
            </Row>
        </Container>
    )
}

export default Search;