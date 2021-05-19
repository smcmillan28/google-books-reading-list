import React from "react";

// Defining styles for card component
const styles = {
    cardStyle: {
        width: "60%",
        margin: "auto",
        marginTop: "15px",
        border: "2px solid black",
        borderRadius: "6px",
        backgroundColor: "lightgoldenrodyellow"
    },
    buttonStyle: {
        margin: "5px"
    }
}

function SaveCard(props) {
    return (
        <div className="card" style={styles.cardStyle} id={props.id}>
            <img src="" className="card-img-top" alt="book"></img>
                <div className="card-body">
                    <h5 className="card-title">Book title</h5>
                    <p className="card-text">Book Synopsis</p>
                    <button style={styles.buttonStyle} className="btn btn-outline-dark">Read More</button>
                    <button className="btn btn-outline-dark">Delete</button>
                </div>
        </div>
    )
}

export default SaveCard;