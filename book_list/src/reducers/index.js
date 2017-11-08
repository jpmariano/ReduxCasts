import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

{/*combineReducers - tells redux how to create application state
  - key of the state: books
  - value of the reducers: BooksReducer
*/}
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
