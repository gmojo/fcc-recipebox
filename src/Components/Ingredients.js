import React, { Component } from 'react';
import '../App.css';
import { Segment } from 'semantic-ui-react'

class Ingredient extends Component {

  render() {
  	const ingredient = this.props.item;

    return (
    	<Segment>
    		{ingredient}
    	</Segment>
    );
  }
}

export default Ingredient;

