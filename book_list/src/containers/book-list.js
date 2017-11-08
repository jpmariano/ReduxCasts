import React, { Component } from "react";
import { connect } from "react-redux"; {/*Connects redux and the component */}
import { selectBook } from "../actions/index";  {/*Imported actions */}
import { bindActionCreators } from "redux"; {/*Connects actions to reducers */}

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

{/*mapStateToProps - takes application state and return objects as props inside of BookList class
 This is where the mapping between the redux reducers and the component state 
  - books (reducers): state.books(book component state)
  - books - will be usable inside the component as this.props.books
  - this tracts the application state
*/}
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books 
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed to all of our reducers
  //return bindActionCreators({ selectBook: selectBook- imported actions }, dispatch - is like a funnel that passes the action obj to reducers);
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
//export default connect(mappingfunctionstatetoprops, mapdispatchtoprops)(Container) - component becomes container;
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
