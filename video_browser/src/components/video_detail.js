import React from "react";

{/*React needs to be imported because JSX will call React.createElement 
VideoDetail - stateless component
stateless component: No lifecycle hook and refs 

- const VideoDetail = ({ video })  - you can use props or just access { video } 
  - VideoDetail video is passed from parent component index.js 
- Handling Null = if (!video)  
*/}
const VideoDetail = ({ video }) => { 
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

{/*What compotent will import VideoDetail will get the component of the VideoDetail */}
export default VideoDetail;
