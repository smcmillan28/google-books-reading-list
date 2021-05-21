import React from "react";

// Defining styles for card component
const styles = {
    cardStyle: {
        width: "50%",
        margin: "auto",
        marginTop: "15px",
        border: "2px solid black",
        borderRadius: "6px",
        backgroundColor: "lightgoldenrodyellow"
    },
    buttonStyle: {
        margin: "5px"
    },
    imageStyle: {
        height: "50%",
        width: "35%",
        marginBottom: "10px"
    }
}

function SearchCard(props) {
    return (
        <div className="card" style={styles.cardStyle} id={props.id}>
                <div className="card-body">
                    <img style={styles.imageStyle} src={props.image} className="card-img-top" alt="book"></img>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">By: {props.author}</p>
                    <button onClick={props.bookSave} className="btn btn-outline-dark">Save</button>
                </div>
        </div>
    )
}

export default SearchCard;