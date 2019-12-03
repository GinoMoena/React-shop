import React from 'react'
import {Jumbotron, Button, Container} from 'react-bootstrap'
import jumbotron_logo from '../jumbotron_logo.png'
import List from '../views/ItemList/List'
import axios from 'axios'
import history from '../router/history'
import Footer from './Footer'

let jStyle = {
  backgroundImage: 'url('+jumbotron_logo+')',
  backgroundSize: '100% auto',
  color: '#FFFFFF',
  fontSize: '32px'
}

let jTitle = {
  fontSize: '64px'
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'hola'
    }
  }

  componentDidMount () {
    this.setState({text: 'Inicio'})
  }

  loadData () {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => {
        console.log(res)
        this.setState({text: res.data.title})
      })
      .catch((err) => {
        console.log('error')
        console.log(err)
      })
  }

  goToProducts() {
    history.push('/results')
  }

  render () {
    return (
      <div style={{marginTop: '3rem'}}>
        <Jumbotron style={jStyle} fluid>
          <Container>
            <div style={jTitle}>React-shop</div>
            <p>Realizar compras Online</p>
            <Button onClick={() => this.goToProducts()}>Ver productos</Button>
          </Container>
        </Jumbotron>
        <List />
        <Footer />
      </div>
    )
  }
}

export default Home