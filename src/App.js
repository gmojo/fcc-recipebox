import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react'
import NewRecipe from './Components/NewRecipe'
import RecipeSegment from './Components/RecipeSegment.js';
import NavComponent from './Components/Navbar.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  recipes: [],
		  newRecipeName: '',
		  newRecipeIngredients: '',
		  modalOpen: false,
		  editing: {editMode: false, editRecipeIndex: null},
		};
	}

	//Update state with recipes if in localStorage else set default intial recipes
	componentDidMount() {
		//if recipes exist set state with them else set default examples
		if(localStorage.getItem('recipes') && localStorage.getItem('recipes') !== '[]') {
			let recipes = JSON.parse(localStorage.getItem('recipes'))
			this.setState({recipes})
		} else {
			let recipes = [
				{recipeName: 'Cake', ingredients: ['eggs', 'flour', 'sugar']},
				{recipeName: 'Tea', ingredients: ['tea bag', 'hot water', 'milk', 'sugar']}
			]
			localStorage.setItem('recipes', JSON.stringify(recipes))
			this.setState({recipes})			
		}
	}

	//Open modal
  	handleOpen = () => this.setState({ modalOpen: true })

  	//Close modal and reset state values
	handleClose = () => {
		this.setState({ 
			modalOpen: false,
			newRecipeName: '',
			newRecipeIngredients: '',
			editing: {editMode: false, editRecipeIndex: null},
		 })
	}

	//Record changes in modal and temporarily store - only update on submit
  	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	//Delete recipe
	deleteRecipe = (index) => {
		let recipes = this.state.recipes.slice()
		recipes.splice(index, 1)
		this.setState({recipes})
		localStorage.setItem('recipes', JSON.stringify(recipes))
	}

	//Edit Recipe - pass values into modal based on index
	editRecipe = (index) => {
		this.setState({ 
			newRecipeName: this.state.recipes[index].recipeName, 
			newRecipeIngredients: this.state.recipes[index].ingredients.join(','),
			editing: {editMode: true, editRecipeIndex: index},
			modalOpen: true 
		})
	}

	//Handle submit for new recipe and editing recipe
	handleSubmit = (e) => {
		let edit = this.state.editing

		//if modal opened via edit
		//recreate recipes array with edited element in same index position and update state
		if(edit.editMode) {
			let recipes = this.state.recipes
			let newRecipes = []
			
			//if index position matches then will be replaced with updated element
			for(let i =0; i < recipes.length; i++) {
				if(i===edit.editRecipeIndex) {
					newRecipes.push({
						recipeName: this.state.newRecipeName, 
						ingredients: this.state.newRecipeIngredients.split(',')
					})
				} else {
					newRecipes.push(recipes[i])
				}
			}

			this.setState({ recipes: newRecipes })
			localStorage.setItem('recipes', JSON.stringify(recipes))
			this.handleClose()
		} 
		//if new recipe create new recipes array and update state
		else {
			let recipes = this.state.recipes
			let ingredients = this.state.newRecipeIngredients.split(',')
			recipes.push({recipeName: this.state.newRecipeName, ingredients: ingredients})

			this.setState({ recipes })
			localStorage.setItem('recipes', JSON.stringify(recipes))
			this.handleClose()
		}
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
                <RecipeSegment 
                	recipe={recipe} 
                	index={index} 
                	deleteRecipe={this.deleteRecipe} 
                	editRecipe={this.editRecipe} 
                	key={index}
                />
              ))}
              </Segment.Group>

            <NewRecipe 
              handleSubmit={this.handleSubmit} 
              handleChange={this.handleChange} 
              newRecipeName={this.state.newRecipeName} 
              newRecipeIngredients={this.state.newRecipeIngredients} 
              open={this.handleOpen} 
              close={this.handleClose}
              modalOpen={this.state.modalOpen} 
            />
        </Container>
      </div>
    );
  }
}

export default App;
