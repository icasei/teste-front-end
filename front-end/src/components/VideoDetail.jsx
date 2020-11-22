import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';

const VideoDetail = () => {
    const [video, setVideo] = useState([]);
    const KEY = 'AIzaSyA4ELBqvbT_O4q5v6kO7dH3VGvNOOF8mKs';
    const { params } = useRouteMatch();
    const url = `https://www.youtube.com/embed/${params.id}`;

    useEffect(async (search) => {
        try {
          const res = await axios.get('https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              key: KEY,
              id: search,
              maxResults: 1,
            },
          }
          );
          console.log("Detalhes" ,res.data.items)
          setVideo(res.data.items[0]);
        } catch (err) {
          console.log(err);
        }
      }, [params.id]);
      console.log('parametros', params.id)
      console.log("veidiads",video)

    return (
        <>
        {!video ? 
        <h1> Loading.... </h1> 
        :
        <>
        <button><Link to='/home'>voltar</Link></button>
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{video.snippet?.title}</div>
                    <div>{video.snippet?.description}</div>
                </div>
            </div>
         </>   
        } 
        </>
    );
};

export default VideoDetail;