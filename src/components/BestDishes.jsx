import React, { useState, useEffect } from "react";
import axios from 'axios';



function BestDishes({ isLoggedIn, setError, likedRecipes, handleLikeClick }) {
    const [bestRecipes, setBestRecipes] = useState([]);
    const appId = '497f231b';
    const appKey = 'abe51f205e7b5bd9932d0e43892666fc';
    const [searchTerm, setSearchTerm] = useState("chicken");
    


    useEffect(() => {
        const fetchBestRecipes = async () => {
            try {
                const response = await axios.get(`https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${appKey}`);
                const likedBestRecipes = response.data.hits.filter((recipe) =>
                    likedRecipes.includes(recipe.recipe)
                );
                setBestRecipes(likedBestRecipes);
            } catch (error) {
                setError(error);
            }
        };
        fetchBestRecipes();
    }, [likedRecipes, setError]);

    return (
        <>
            {isLoggedIn ? (
                <>
                    <div>
                        {bestRecipes.map((recipe) => (
                            <div key={recipe.recipe}>
                                <h2>{recipe.label}</h2>
                                <p>{recipe.source}</p>
                                <button
                                    onClick={() => handleLikeClick(recipe.recipe)}
                                    className={likedRecipes.includes(recipe.recipe) ? "liked" : ""}
                                >
                                    Like
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            ) : <h1> Not logged in</h1>}
        </>
    );
}


export default BestDishes