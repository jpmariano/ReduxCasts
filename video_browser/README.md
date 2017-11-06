# ReduxCasts

Completed code examples from [Modern React with Redux](https://udemy.com/react-redux)

Each example from the course can be found within this repo. You can either look at the files in a completed state, or check out the changes that were made in a particular section by clicking on one of the links below.

##React Basics
### STEP 1: ReduxCasts/video_browser/src/index.js
Import React 
```import React from 'react';```
ReactDOM.render 
```import ReactDOM from "react-dom";```
JSX functional component
```const App = function(){ return <div>Hi!</div>; }```
 <App />, //DOM 
 document.querySelector('root') //Target (Could be element, class, id)
```ReactDOM.render(
    <App />, //DOM 
    document.querySelector('root') //Target (Could be element, class, id)
);```

### STEP 2: ReduxCasts/video_browser/src/components/search_bar.js
Notice how we only have Import React and not the ReactDOM
```
import React from 'react';

const SearchBar = () => {
    return <input />;
}
export default SearchBar;```

### STEP 3: ReduxCasts/video_browser/src/index.js

```
import React from 'react';
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const App = function(){ 
    return (
        <div>
            <SearchBar />
        </div>; 
    )
}

ReactDOM.render(
    <App />, 
    document.querySelector('root') 
);```

### STEP 4: Convert Functional Component to Class Component
ReduxCasts/video_browser/src/components/search_bar.js

#### Functional Component 
```
import React from 'react';

const SearchBar = () => {
    return <input />;
}
export default SearchBar;```

#### Class Component 
```
class SearchBar extends React.Component {
  render() {
    return (
        <input />
    );
  }
}```

