import React from "react";
import { Container, Row, Col } from "./Grid";

function SearchInput() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-8">
                    <form className="row g-3">
                        <div className="col-auto">
                            <h4>Search for a book</h4>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Enter Book Title" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Search</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchInput;