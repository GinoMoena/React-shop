import React from 'react'
import './style.css'
import Footer from '../../components/Footer'
import List from './List'

class ItemList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      categories: []
    }
  }

  componentDidMount () {
    this.setState({
      categories: [
        {name: 'TV Hogar'},
        {name: 'Computación'},
        {name: 'Patio y jardín'},
        {name: 'Videojuegos'},
        {name: 'Electrodomésticos'}
      ],
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

  renderCategories () {
    return this.state.categories.map(c => {
      return (
        <p key={c.name}><a href="/results/#">{c.name}</a></p>
      )
    })
  }

  render () {
    return (
      <div>
        <div className="sidebar">
          <h3>Categorías</h3>
          <hr></hr>
          <div className="categories">
            {this.renderCategories()}
          </div>
          {/* <div style={{float: 'left', width: '1rem'}}>
            <a href="/#" className="sidebar-button">Link 1</a>
            <a href="/#" className="sidebar-button">Link 2</a>
            <a href="/#" className="sidebar-button">Link 3</a>
          </div> */}
        </div>

        <List />
        <Footer />
      </div>
    )
  }
}

export default ItemList
