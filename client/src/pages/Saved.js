import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import SaveCard from "../components/SaveCard";

function Saved() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <div>
                            <h5>Click on a book to read more, or delete from your list</h5>
                        </div>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <h2 style={{ textAlign: "center ", textDecoration: "underline", marginTop: "10px" }}>Saved Books: </h2>
            </Row>
            <Row>
                <SaveCard />
            </Row>
        </Container>
    )
}

export default Saved;