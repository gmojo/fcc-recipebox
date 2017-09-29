import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react'
import NewRecipe from './Components/NewRecipe'
import RecipeSegment from './Components/RecipeSegment.js';
import NavComponent from './Components/Navbar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {recipeName: 'Cake', ingredients: ['eggs', 'flour', 'sugar']},
        {recipeName: 'Tea', ingredients: ['tea bag', 'hot water', 'milk', 'sugar']}
      ],
      newRecipeName: '',
      newRecipeIngredients: '',
    };
  }

  deleteRecipe = (index) => {
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({recipes});
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    let recipes = this.state.recipes;
    let ingredients = this.state.newRecipeIngredients.split(',');
    recipes.push({recipeName: this.state.newRecipeName, ingredients: ingredients})
    this.setState({ recipes })
    this.setState({ newRecipeName: '', newRecipeIngredients: '' })
  }

  render() {
    const recipes = this.state.recipes;

    return (
      <div className="App">
        <NavComponent />
        <Container id='page'>
          <h1>FreeCodeCamp Challenge - Recipe Box</h1>

              <Segment.Group>
              {recipes.map((recipe, index) => (
                <RecipeSegment recipe={recipe} index={index} deleteRecipe={this.deleteRecipe} />
              ))}
              </Segment.Group>

            <NewRecipe 
              handleSubmit={this.handleSubmit} 
              handleChange={this.handleChange} 
              newRecipeName={this.state.newRecipeName} 
              newRecipeIngredients={this.state.newRecipeIngredients} 
            />
        </Container>
      </div>
    );
  }
}

export default App;

//Next steps
//1- close form on Modal submit
//2 - Modal form to edit existing entries
//3 - Fix issue with 'each child in array should have key'
//4 - Local storage instead of state?
//5 - Comment code and refactor as needed.
