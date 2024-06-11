import React, { useState } from "react";

function Search(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.setSearchTerm(input);
    props.searchSubmitted();
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "5%" }}>
        You Give Ingredients - We Give You Recipe
      </h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
            transform: "scale(1.2)"
          }}
          className="input-group"
        >
          <div style={{ width: "40%" }} className="form-outline">
            <input
              onChange={handleChange}
              type="search"
              id="form1"
              className="form-control"
              placeholder="Find New Recipes!"
            />
          </div>
          <button
            onClick={handleSubmit}
            style={{ width: "5%", marginLeft: "2%" }}
            type="submit"
            className="btn btn-outline-warning"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
