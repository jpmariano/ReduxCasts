import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/app";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
{/*
Redux - tracts application states 
Reducers - returns the application state
  - step 1: reducers/reducer_books.js - creates the application state
  - Step 2: reducers/index.js - combines reducers
  - step 3: containers/book-list.js - have direct connection with the state manage by redux 

Tracking action (by connecting actions to containers) - see image bookclick-actioncreator-obj-reducers-choosestate-application-reactapplication
- Action Creator - src/actions/index.js
  - selectBook(book) - returns objects
    -  return {
          type: "BOOK_SELECTED",
          payload: book
        };
- containers/book-list.js
        - import { bindActionCreators } from "redux";
          - So, the data objects can flow to reducers in the container
        - map action object Dispatch To Props
        - Call the action 
          - this.props.selectBook(book)
            - {
                type: "BOOK_SELECTED",
                payload: book
              };
- Active Reducer - reducers/reducer_active_book.js
        - Check for type:  BOOK_SELECTED 
        - Do not mutuate the state
- Import Active Book Reducer to reducers/index.js
- Pass data to container -  containers/book-detail.js

*/}