import React, { Component } from 'react';

export default class VideoListItem extends Component {
  render(){
    const onVideoSelect = this.props.onVideoSelect
    const video = this.props.video
    const imageURL = this.props.video.snippet.thumbnails.default.url
    return (
      <li className="list-group-item" onClick={()=>onVideoSelect(video)}>
        <div className="video-list media">
          <div className="media-left">
              <img className="media-object" src={imageURL}/>
          </div>
          <div className="media-body">
            <div className="media-heading">
              {video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    )
  }
}
