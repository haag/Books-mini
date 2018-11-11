import React, {Component} from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
    renderList() {
        // console.log(this.props)
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

// Whatever is returned from state will show up as props in BookList
function mapStateToProps(state){
    return {
        books: state.books
    }
}
// connect takes a function and a component and produces a container
export default connect(mapStateToProps)(BookList)