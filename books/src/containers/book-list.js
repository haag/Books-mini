import React, {Component} from 'react'
import { connect } from 'react-redux'
import selectBook from "../actions/index"
import { bindActionCreators } from 'redux'


class BookList extends Component {
    renderList() {
        // console.log(this.props)
        return this.props.books.map(book => {
            return (
                <li 
                    onClick={() => this.props.selectBook(book)}
                    key={book.title} className="list-group-item">
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
        books: state.boooks
    }
}
//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be sent(dispatched) to all reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
            //this.props.selectBook will call action creator--selectBook
}
// connect takes a function and a component and produces a container
//promote BookList from a component to a container -- it needs to know about this new distpatch
//method, selectBook, make it available as a prop

export default connect(mapStateToProps, mapDispatchToProps)(BookList)