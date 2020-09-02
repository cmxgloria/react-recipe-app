import React from "react";
import { Link } from "react-router-dom";
const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div
            key={recipe.recipe.label}
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipe__box-img">
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <div className="recipe__text">
                <p className="recipes__calories">
                  Calories:<span>{recipe.recipe.calories}</span>
                </p>
                <p>
                  Ingredients:<span>{recipe.recipe.ingredients}</span>
                </p>
              </div>
              <button className="recipe_button">
                <Link
                  to={{
                    pathname: `./recipe/${recipe.recipe.label}`,
                    state: { recipe: recipe.recipe.label }
                  }}
                >
                  View Recipe
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
export default Recipes;
