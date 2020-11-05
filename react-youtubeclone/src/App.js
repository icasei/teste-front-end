import React, {useState} from "react";
import { Grid } from "@material-ui/core";
import {SearchBar, VideoList, VideoDetail } from "./components";
import youtube from "./api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectVideo, setSelectedVideo] = useState(null);

  return(
    <Grid style={{ justifyContent:"center"}} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSumit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={video} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm){
    const {data: {items:videos}} = await youtube.get("search", {
      params:{
        part: "snippet",
        maxResults: 5,
        key: process.env.React_APP_API_KEY,
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}
