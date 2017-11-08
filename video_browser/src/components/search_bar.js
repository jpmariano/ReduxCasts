import React, { Component } from "react";

{/*
Stateful or class base component: 
- have a state that gets initialized in the constructor
- can have lifecycle hook and refs
- must have a render method 

List of Events: https://reactjs.org/docs/events.html 
onChange - is a form events 
onInputChange(term) - event handler, when event occurs this gets an input parameter automatically 
  - try console.log event.target.value this outputs the input value 
    - just a cleaner way to pass the event as anonymous arrow function - (event) => this.onInputChange(event.target.value)

State - Use to record and react to user events
  - constructor(props) - gets called when the component is used
  - super(props) - calls the Component props 
  - Initial State Value - this.state = { term: "" };
  - componentDidMount
    - This method gets called just after our component gets rendered (or mounted as React calls it).
  - getInitialState
    - This method runs just before your component gets mounted, and it allows you to modify a component's state object.
  - setState
    - This method allows you to update the value of the state object
  - this.state.term - gets the state current update
  - calls the parent method and pass the term as a value - this.props.onSearchTermChange(term);
*/}
class SearchBar extends Component { 
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
  
  
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
