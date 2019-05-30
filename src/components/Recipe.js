import React from "react";
const API_KEY = '92f74e2d208972d83294d191e27b85b3';
class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = () => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`)
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  render() {
    console.log(this.props);
    return (
      < div >
        Recipe Component!
    </div >
    );
  }
};
export default Recipe;
