export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  // every action has a type (describe the purpose of the action) and payload (data that describes the action taken )
  // BOOK_SELECTED - keep it uppercase
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
