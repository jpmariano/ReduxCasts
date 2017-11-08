import React from "react";
{/*
Notice { video, onVideoSelect } - instead of using props you can access them directly
  - the video/onVideoSelect prop is passed from index.js -> video_list.js -> video_list_item.js 
  - the onVideoSelect prop which contain anonymous function is passed from index.js -> video_list.js -> video_list_item.js 
    - try not to go morethan two level deep
*/}
const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
