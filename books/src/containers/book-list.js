import React, {Component} from 'react'
import { connect } from 'react-redux'
import selectBook from "../actions/index"
import { bindActionCreators } from 'redux'

//Styling
import { Card, Row, Col, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <Row className="d-flex flex-row" sm="4">
                    <Col sm="6">
                    <Card key={book.title} className="list-group-item">
                        <CardTitle> { book.title } </CardTitle>  
                        <Button color="danger" onClick={() => this.props.selectBook(book)}> Details </Button>
                    </Card>
                    </Col>
                </Row>
            )
        })
    }


    render(){
        return (
            <div className="list-group col-sm-3">
                {this.renderList()}
            </div>
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