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
        </div>

        <List />
        <Footer />
      </div>
    )
  }
}

export default ItemList
