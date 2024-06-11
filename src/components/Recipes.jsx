import React, { useState } from "react";
import Favorite from "./Favorite";
import RecipeDetail from "./RecipeDetail";

function Recipes(props) {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    function mouseHover(event) {
        event.currentTarget.style.background = "#343a40";
    }

    function mouseLeave(event) {
        event.currentTarget.style.background = "#ee6865";
    }

    function handleRecipeClick(recipe) {
        setSelectedRecipe(recipe);
        const targetElement = document.querySelector('.row');
        window.scrollTo({
            top: targetElement.offsetTop + targetElement.offsetHeight,
            behavior: "smooth"
        });
    }

    return (
        <div className="album py-5">
            <div className="row">
                {props.recipesWithLiked.map((recipe, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4" style={{ backgroundColor: "#ee6865" }} onMouseEnter={mouseHover} onMouseLeave={mouseLeave} key={recipe.recipe.label}>
                            <Favorite liked={recipe.liked} setLiked={() => props.handleLikeClick(recipe.recipe)} />
                            <img className="card-img-top" src={recipe.recipe.image} alt={recipe.recipe.label} onClick={() => handleRecipeClick(recipe.recipe)} />
                            <div className="card-body">
                                <h2 className="card-text" style={{ color: "black" }}>{recipe.recipe.label}</h2>
                                <p className="card-text">Calories: {Math.round(recipe.recipe.calories)}</p>
                                <p className="card-text">Cuisine Type: {recipe.recipe.cuisineType} </p>
                                <p className="card-text">Dish Type: {recipe.recipe.dishType} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}

        </div >
    );
}


export default Recipes;
