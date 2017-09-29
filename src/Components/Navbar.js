import React, { Component } from 'react';
import '../App.css';
import { Container, Menu } from 'semantic-ui-react'

class NavComponent extends Component {

  render() {
    return (

        <Menu id="nav" fixed='top' inverted>
          <Container>

            <Menu.Item>
              <a href='https://GarethMoger.Com/'>GarethMoger.com</a>
            </Menu.Item>

          </Container>
        </Menu>

    );
  }
}

export default NavComponent;
