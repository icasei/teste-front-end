import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import { useState } from 'react';

const FetchApi = () => {
    const [search, setSearch] = useState('harry potter');
    const KEY = 'AIzaSyCuAaFQ2Ex2EW1TS_UdzAgxgXQkA0WcSxk';
  
    const fetchApi = async () => {
        const { data } = await axios.get(
            'https://www.googleapis.com/youtube/v3/search',
            {
                params: {
                    part: 'snippet',
                    maxResults: 10,
                    key: KEY,
                    q: search,
                },
            }
        )
        return data;
    };
     const { data } = useQuery('list', fetchApi );
     console.log("aqui tem a data", data);
    return (
        <form>
            <label>
                Nome:
                <input  type="text" name="name" />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    );
};

export default FetchApi;