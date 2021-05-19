import React from "react";
import { Container, Row, Col } from "./Grid";

const styles = {
    formStyles: {
        margin: "10px",
        border: "2px solid black",
        borderRadius: "5px",
        textAlign: "center",
        width: "95%"
    },
    inputStyles: {
        width: "100%"
    }
}

function SearchInput(props) {
    return (
        <Container fluid>
            <Row style={styles.rowStyles}>
                <Col style={styles.columnStyles} size="md-12">
                    <form style={styles.formStyles} onSubmit={props.handleSubmit} className="row g-3">
                        <div className="col-3">
                            <h4>Search for a book</h4>
                        </div>
                        <div className="col-6">
                            <input
                                style={styles.inputStyles}
                                type="text"
                                className="form-control"
                                placeholder="Enter Title or Author"
                                ref={props.searchTerm}
                            />
                        </div>
                        <div className="col-1">
                            <button 
                                type="submit" 
                                className="btn btn-secondary mb-3"
                                onClick={props.searchBooks}
                            > 
                            Search
                            </button>
                        </div>
                    </form>
                </Col>
            </Row>
            <Row>
                <hr></hr>
            </Row>
        </Container>
    )
}

export default SearchInput;