import React, { Component } from 'react';
import { Button, Modal, Header, Form } from 'semantic-ui-react'

class NewRecipe extends Component {

	render() {
    const { newRecipeName, newRecipeIngredients } = this.props

	    return (
          <Modal trigger={<Button primary>New Recipe</Button>}>
            <Modal.Content>
              <Modal.Description>
                <Header>New Recipe</Header>
                  <Form onSubmit={this.props.handleSubmit}>
                    <Form.Input
                      label='Name' 
                      placeholder='Recipe Name' 
                      name='newRecipeName' 
                      value={newRecipeName} 
                      onChange={this.props.handleChange}
                    />
                    <Form.TextArea 
                      label='Ingredients' 
                      placeholder='Enter ingredients seperated by commas' 
                      name='newRecipeIngredients' 
                      value={newRecipeIngredients} 
                      onChange={this.props.handleChange}
                    />
                    <Form.Button>Submit</Form.Button>
                  </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
	    );
	}
}	

export default NewRecipe;