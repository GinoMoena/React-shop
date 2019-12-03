import React from 'react'
import {Table} from 'react-bootstrap'

class Tabla extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fields: ['name', 'lastName'],
      items: [
        {
          name: 'Mark',
          lastName: 'Zuck'
        },
        {
          name: 'Steve',
          lastName: 'Jobs'
        }
      ]
    }
  }

  renderTable () {
    return this.state.items.map((item, id) =>{
      const {name, lastName} = item
      return(
        <tr key={id+1}>
          <td>{id+1}</td>
          <td>{name}</td>
          <td>{lastName}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <Table striped bordered fields={this.fields} items={this.items}>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Tabla