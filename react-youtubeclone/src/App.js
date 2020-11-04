import React, {useState} from "react";
import { Grid } from "@material-ui/core";

import {SearchBar, VideoList, VideoDetail} from "./components";
import youtube from "./api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectVideo, setSelectedVideo] = useState(null);

  return(
    <Grid style
  );
}
