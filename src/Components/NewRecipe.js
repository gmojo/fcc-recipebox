import React, { Component } from 'react';
import { Button, Modal, Header, Form } from 'semantic-ui-react'

class NewRecipe extends Component {

	render() {
    const { newRecipeName, newRecipeIngredients } = this.props

	    return (
          <Modal 
          	trigger={<Button primary onClick={this.props.open}>New Recipe</Button>}
          	open={this.props.modalOpen}
          	onClose={this.props.close}
          >
            <Modal.Content>
              <Modal.Description>
                <Header>Recipe</Header>
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
                    <Button.Group>
	                    <Form.Button positive>Submit</Form.Button>
	                    <Button.Or />
	                    <Form.Button negative onClick={this.props.close}>Cancel</Form.Button>
                    </Button.Group>
                  </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
	    );
	}
}	

export default NewRecipe;