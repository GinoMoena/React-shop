import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
// import {NavLink} from 'react-router-dom'
import './Navbar.css'
import history from '../router/history'

class NavBar extends React.Component {
 
  handleClick (to) {
    history.push(to)
  }

  render () {
    return (
      <div>
        <Navbar fixed="top" variant="dark" bg="dark" expand="lg">
          <Navbar.Brand href="#home">React-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => this.handleClick('/')}>Inicio</Nav.Link>
              <Nav.Link onClick={() => this.handleClick('/results')}>Productos</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar