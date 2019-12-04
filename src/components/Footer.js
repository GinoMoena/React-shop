import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../logo.svg'

let footerStyle = {
  backgroundColor: '#343A40',
  color: '#F9FDFF',
  padding: '5rem 10rem 10rem 20rem'
}

function Footer () {
  return (
    <div style={footerStyle}>
      <Container>
        <Row>
          <Col>
            <img width="200px" src={logo} alt="React-shop logo" />
            <h1>React-Shop</h1>
          </Col>
          <Col>
            <h2>Acerca de</h2>
            <hr></hr>
            <p>Sitio web de prueba utilizando React + Bootstrap, Utilizando Visual Studio Code como editor de texto.</p>
          </Col>
          <Col>
            <h2>Contacto</h2>
            <hr></hr>
            <p>Gino Moena</p>
            <p>gino.moena@gmail.com</p>
            <p>Temuco, Chile 2019.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer