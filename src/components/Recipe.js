import React from "react";
const API_KEY = '05ad831c39d59352631d2c02bb87dc47';
class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);

  }
  render() {
    const recipe = this.state.activeRecipe;
    console.log(this.props);
    return (
      < div className="container">
        <div className="active-recipe">
          <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
          <h3 className="active-recipe__title">{recipe.title}</h3>
          <h4 className="active-recipe__publisher">
            Publisher:<span>{recipe.publisher}</span>
          </h4>
          <p className="active-recipe__website">
            Website:<span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span></p>
        </div>
      </div >
    );
  }
};
export default Recipe;
