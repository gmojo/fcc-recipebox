import React, { Component } from 'react';
import '../App.css';
import { Button, Segment, Accordion, Icon } from 'semantic-ui-react'
import Ingredient from './Ingredients.js';

class RecipeSegment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: -1,
		}
	}

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
  	const { activeIndex } = this.state;
  	const recipe = this.props.recipe;
  	const index = this.props.index;

    return (

        <Segment raised>
        	<Accordion>
				<Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
					<Icon name='dropdown' />
					{recipe.recipeName}
				</Accordion.Title>
				<Accordion.Content active={activeIndex === index}>
					<Segment.Group raised>
						{recipe.ingredients.map((item) => (
							<Ingredient item={item} />
						))}
					</Segment.Group>
					<div>
					  <Button positive>Edit</Button>
					  <Button negative onClick={(event)=>this.props.deleteRecipe(index)}>Delete</Button>
					</div>
				</Accordion.Content>
          </Accordion>
        </Segment>

    );
  }
}

export default RecipeSegment;

