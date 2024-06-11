import React, { useState, useEffect } from "react";

function Filter(props) {
    const [filterBy, setFilterBy] = useState("Filter");
    const [sortFavorites, setSortFavorites] = useState(false);

    function handleClick(event) {
        setFilterBy(event.target.innerText);
        if (event.target.innerText === "By Favorite") {
            setSortFavorites(true);
        } else {
            setSortFavorites(false);
        }
    }

    function compareRecipes(a, b) {
        if (
            sortFavorites &&
            props.likedRecipes.includes(a.recipe) &&
            !props.likedRecipes.includes(b.recipe)
        ) {
            return -1; 
        } else if (
            sortFavorites &&
            !props.likedRecipes.includes(a.recipe) &&
            props.likedRecipes.includes(b.recipe)
        ) {
            return 1; 
        } else {
            return 0; 
        }
    }

    const sortedRecipes = sortFavorites
        ? [...props.recipesWithLiked].sort(compareRecipes)
        : props.recipesWithLiked;

    useEffect(() => {
        props.setRecipes((prevRecipes) => {
            if (filterBy === "By Calories") {
                return [...prevRecipes].sort(
                    (a, b) => b.recipe.calories - a.recipe.calories
                );
            } else if (filterBy === "By Name") {
                return [...prevRecipes].sort((a, b) =>
                    a.recipe.label.localeCompare(b.recipe.label)
                );
            } else if (filterBy === "By Favorite") {
                return sortedRecipes;
            }
            return prevRecipes;
        });
    }, [filterBy, sortFavorites, props.setRecipes] );

    return (
        <div className="btn-group">
            <button
                style={{ marginBottom: "-40%" }}
                type="button"
                className="btn btn-outline-warning dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                {filterBy}
            </button>
            <div className="dropdown-menu">
                <a onClick={handleClick} className="dropdown-item" href="#">
                    By Calories
                </a>
                <a onClick={handleClick} className="dropdown-item" href="#">
                    By Name
                </a>
                <a onClick={handleClick} className="dropdown-item" href="#">
                    By Favorite
                </a>
            </div>
        </div>
    );
}

export default Filter;
