import _ from "lodash";
import React, { Component } from "react"; {/* https://stackoverflow.com/questions/34114350/react-vs-reactdom */}
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar"; {/* Searchbar Step 1 : Notice how filename is imported*/}
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

 {/* Parent Component: ES6 Class Component
 - this.state - initializes state
  - videoSearch - initializes and updates the state videos and selected video 

  - Passing Props/ argument
    <VideoList videos={this.state.videos} />
  - Passing anonymous function using props - onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
  - Passing method using props - onSearchTermChange={videoSearch} 
   
  - throttling - _.debounce comes from import _ from "lodash"; 
*/}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
         {/* Child Component*/}
        <SearchBar onSearchTermChange={videoSearch} />  {/* Searchbar Step 2 : */}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

 {/* Parent Component gets injected*/}
ReactDOM.render(<App />, document.querySelector(".container")); 
