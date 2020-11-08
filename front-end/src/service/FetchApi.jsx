// import React, { useEffect, useState } from 'react';
// import {useQuery} from 'react-query';
// import axios from 'axios';

// const FetchApi = () => {
//     const KEY = 'AIzaSyDkNXESD-BeQa3BZmhnhk-OXS-2LCPjMsg';
//     const [videos, setVideos] =  useState([]);
//     const [sldVideo, setSldVideo] = useState(null);
  
//     useEffect(() => {
//         fetchApi('React Tutorials');
//     }, [])
//     const fetchApi = async (option) => {
//         const { data } = await axios.get(
//             'https://www.googleapis.com/youtube/v3/search',
//             {
//                 params: {
//                     part: 'snippet',
//                     maxResults: 5,
//                     key: KEY,
//                     q: option
//                 },
//             }
//         )
//         return data;
//     };
//     const { data } = useQuery('list', useEffect );
//     console.log(data);
//     return (
//         <div>
//             <h1>fetch da api</h1>
//         </div>
//     );
// };

// export default FetchApi;