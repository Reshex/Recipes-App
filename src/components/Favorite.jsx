import React from "react";

function Favorite(props) {
    return (
        <div>
            <button
                style={{ width: "338px", color: "#ffbe0b" }}
                type="button"
                className="btn btn-outline"
                onClick={() => props.setLiked(prevLiked => !prevLiked)}
            >
                {props.liked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
            </button>
        </div>
    );
}

export default Favorite;
