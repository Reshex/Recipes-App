import React from "react";

function RecipeDetail(props) {
    const { recipe } = props;

    function handleClick() {
        window.scrollTo(0, document.body.scrollTop);

    }

    return (
        <div className="album py-5">
            <div className="container">
                <div style={{ textAlign: "center", background: "#ffc107" }} className="container">
                    <h1 style={{ margin: "3%" }}>How To Make it?</h1>
                    <h2>{recipe.label}</h2>
                    <img style={{ width: "40%", height: "40%" }} className="card-img-top" src={recipe.image} alt={recipe.label} />
                    <div className="card-body">
                        <p style={{ scale: "170%", fontWeight: "bold" }} className="card-text">Calories: {Math.round(recipe.calories)}</p>
                        <p style={{ scale: "120%", marginTop: "5%", fontWeight: "bold" }} className="card-text">Ingredients:</p>
                    </div>
                    <p style={{ textAlign: "center", margin: "1%", scale: "110%" }} className="card-body">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.text}</li>
                        ))}
                    </p>
                    <p style={{ scale: "110%", fontWeight: "bold" }}>Minutes To Make It: {recipe.totalTime} </p>
                    <p style={{ scale: "110%", fontWeight: "bold" }} >Cuisine Type: {recipe.cuisineType} </p>
                    <p style={{ scale: "110%", fontWeight: "bold" }}>Dish Type: {recipe.dishType} </p>
                    <p style={{ scale: "110%", fontWeight: "bold" }}>Meal Type: {recipe.mealType} </p>
                </div>
            </div>
            <button onClick={handleClick}
                type="button"
                className="btn btn-danger btn-floating btn-lg"
                id="btn-back-to-top"
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </div >
    );
}

export default RecipeDetail;