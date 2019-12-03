import React from 'react'
import './style.css'
import { Container, Col, Row, Card } from 'react-bootstrap'
import logo from '../../placeholder.png'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  componentDidMount () {
    this.setState({
      items: [
        {
          name: 'Televisor Samsung 24"',
          description: 'Televisor Smart TV, 24 pulgadas Full HD',
          cost: '199.990'
        },
        {
          name: 'Televisor Samsung 24"',
          description: 'Televisor Smart TV, 24 pulgadas Full HD',
          cost: '159.990'
        },
        {
          name: 'Televisor Samsung 24"',
          description: 'Televisor Smart TV, 24 pulgadas Full HD',
          cost: '189.990'
        },
        {
          name: 'Televisor Samsung 24"',
          description: 'Televisor Smart TV, 24 pulgadas Full HD',
          cost: '144.990'
        },
        {
          name: 'Televisor Samsung 24"',
          description: 'Televisor Smart TV, 24 pulgadas Full HD',
          cost: '99.990'
        },
        {
          name: 'Televisor Samsung 24"',
          description: 'Televisor Smart TV, 24 pulgadas Full HD',
          cost: '79.990'
        },
        {
          name: 'Televisor Samsung 24"',
          description: 'Televisor Smart TV, 24 pulgadas Full HD',
          cost: '179.990'
        },
        {
          name: 'Televisor Samsung 24"',
          description: 'Televisor Smart TV, 24 pulgadas Full HD',
          cost: '299.990'
        },
        {
          name: 'Televisor Samsung 24"',
          description: 'Televisor Smart TV, 24 pulgadas Full HD',
          cost: '299.990'
        },
        {
          name: 'Televisor Samsung 24"',
          description: 'Televisor Smart TV, 24 pulgadas Full HD',
          cost: '19.990'
        },
      ]
    })
  }

  renderItems () {
    return this.state.items.map((i, index) => {
      return (
        <Col xl="3" lg="4" md="6" sm="12" key={index}>
          <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>{i.name}</Card.Title>
              <Card.Text>{i.description}</Card.Text>
            </Card.Body>
          </Card>
      <h3 style={{textAlign: 'center'}}>${i.cost}</h3>
        </Col>
      )
    })
  }

  render () {
    return (
      <div className="item-container">
        <h1>Productos</h1>
        <hr></hr>
        <Container>
          <Row>
            {this.renderItems()}
          </Row>
        </Container>
      </div>
    )
  }
}

export default List