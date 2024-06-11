import React from "react";

function Loading(props) {
    return (
        <div className="loading">
            {props.loading && (
                <div className="loading-spinner">
                    <div className="loading-bounce1"></div>
                    <div className="loading-bounce2"></div>
                    <div className="loading-bounce3"></div>
                </div>
            )}
        </div>
    );
}

export default Loading
