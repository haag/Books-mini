import React, {Component} from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
    renderList() {
        console.log(this.props)
        return this.props.books.map(book => {
            return (
                <li key={book.title} className="list-group-item">
                {book.title}
                </li>
            )
        })
    }
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

export default BookList