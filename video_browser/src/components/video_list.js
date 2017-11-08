import React from "react";
import VideoListItem from "./video_list_item";

{/* Stateless Component or arrow component
stateless component: No lifecycle hook and refs  
- notice how all parent props gets pass as an argument - const VideoList = props 
  - There's no more this.props 
  - props.videos - gets passed from parent component 
- VideoList - Output of loop/map 
- props.onVideoSelect which contain anonymous function- comes from parent inject.js
*/}
const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
