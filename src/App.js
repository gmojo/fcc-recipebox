import React, { Component } from 'react';
import './App.css';
import { Accordion, Icon, Button, Segment } from 'semantic-ui-react'
import NewRecipe from './Components/NewRecipe'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      recipes: [
        {recipeName: 'Cake', ingredients: ['eggs', 'flour', 'sugar']},
        {recipeName: 'Tea', ingredients: ['tea bag', 'hot water', 'milk', 'sugar']}
      ],
      showModal: false,
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  deleteRecipe(index) {
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({recipes});
  }

  render() {
    const recipes = this.state.recipes;
    const { activeIndex } = this.state;

    return (
      <div className="App">
        <h1>FreeCodeCamp Challenge - Recipe Box</h1>
        <div className="container">

          <Accordion>
            <Segment raised>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name='dropdown' />
                What is a dog?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>There are many breeds of dogs.</p>
                <div>
                  <Button primary>Primary</Button>
                  <Button secondary>Secondary</Button>
                </div>
              </Accordion.Content>
            </Segment>

            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
              <Icon name='dropdown' />
              What kinds of dogs are there?
            </Accordion.Title>

            <Accordion.Content active={activeIndex === 1}>
              <p>There are many breeds of dogs.</p>
              <div>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
              </div>
            </Accordion.Content>
          </Accordion>

          <NewRecipe />

        </div>
      </div>
    );
  }
}

export default App;

//delteRecipe button onClick={(event)=>this.deleteRecipe(index)}
