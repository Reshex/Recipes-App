import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from 'axios';
import Search from "./Search";
import Filter from "./Filter";
import Header from "./Header";
import Footer from "./Footer";
import Recipes from "./Recipes";
import Loading from "./Loading";
import Login from "./Login";
import Register from "./Register";
import LoginOrRegister from "./LoginOrRegister";
import BestDishes from "./BestDishes";


function App() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    const [likedRecipes, setLikedRecipes] = useState([]);
    const [recipesWithLiked, setRecipesWithLiked] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLikedRecipes = localStorage.getItem('likedRecipes');
        if (storedLikedRecipes) {
            setLikedRecipes(JSON.parse(storedLikedRecipes));
        }
        const storedShowFilter = localStorage.getItem('showFilter');
        if (storedShowFilter) {
            setShowFilter(JSON.parse(storedShowFilter));
        }
    }, []);

    const appId = '497f231b';
    const appKey = 'abe51f205e7b5bd9932d0e43892666fc';

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${appKey}`);
                setRecipes(response.data.hits);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [searchTerm]);

    function handleLikeClick(recipe) {
        let newRecipesWithLiked = [...recipesWithLiked];
        const index = newRecipesWithLiked.findIndex(r => r.recipe === recipe);
        newRecipesWithLiked[index].liked = !newRecipesWithLiked[index].liked;
        setRecipesWithLiked(newRecipesWithLiked);

        if (likedRecipes.includes(recipe)) {
            setLikedRecipes(prevLikedRecipes => prevLikedRecipes.filter(r => r !== recipe));
        } else {
            setLikedRecipes(prevLikedRecipes => [...prevLikedRecipes, recipe]);
        }
    }


    useEffect(() => {
        setRecipesWithLiked(recipes.map(recipe => {
            return {
                ...recipe,
                liked: likedRecipes.includes(recipe.recipe)
            };
        }));
    }, [likedRecipes, recipes]);

    function searchSubmitted() {
        setShowFilter(true);
    }

    function handleLogOut() {
        setIsLoggedIn(false)

    }


    if (loading) return (
        <Loading loading={loading} />
    );
    if (error) return <h1 style={{ color: "white", fontWeight: "bold" }}>Error: {error}</h1>;


    return (
        <>

            <Routes>
                <Route path="/" element={<LoginOrRegister />} />
                <Route path="/recipes" element={
                    <>
                        {isLoggedIn ? (
                            <>
                                <div style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                    <Header handleLogOut={handleLogOut} />
                                    <div className="album py-5">
                                        <div className="container">
                                            <Search searchSubmitted={searchSubmitted} setSearchTerm={setSearchTerm} />
                                            {showFilter ? (
                                                <Filter likedRecipes={likedRecipes} recipesWithLiked={recipesWithLiked} setRecipes={setRecipes} />
                                            ) : null}
                                            <Recipes
                                                handleLikeClick={handleLikeClick}
                                                recipesWithLiked={recipesWithLiked}
                                                likedRecipes={likedRecipes}
                                                setLikedRecipes={setLikedRecipes}
                                                recipes={recipes}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Footer />
                            </>
                        ) : <Navigate to="/" />}
                    </>
                } />
                <Route path="/bestdishes" element={<BestDishes isLoggedIn={setIsLoggedIn} setError={setError} likedRecipes={likedRecipes} handleLikeClick={handleLikeClick} />} />
                <Route path="/login" element={<Login setError={setError} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
                <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} setError={setError} />} />
            </Routes>
        </>
    );
}


export default App

