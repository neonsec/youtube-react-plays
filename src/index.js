import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAQ8Uc1Ztxz074IUpjEEGWxPffEDjFWwjM'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Qurans Holy book')
  }


  videoSearch(term){
    YTSearch({key: API_KEY, term: term},(videos)=>{
      this.setState({ videos, selectedVideo: videos[1]})
    });
  }
  render(){
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)},700)
    console.log(this.state.videos)
    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
