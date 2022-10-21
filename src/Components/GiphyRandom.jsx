import React from "react";
import { useEffect, useState } from "react";
import giphyRandom from "giphy-random";


const API_KEY = '0FJF4G0FxWMcqIqVp8x4gftu3SVhedmm';

const NewGiphyRandom = ({ tag }) => {
   const [giphyUrl, setGiphyUrl] = useState('');
   const [searchTag, setSearchTag] = useState('');

   const getGiphyUrl = async (tag) => {
      const { data } = await giphyRandom(API_KEY, { tag })
      const result = data.images.downsized_medium.url;
      console.log(result);
      setGiphyUrl(result);
   };

   useEffect(() => {
      getGiphyUrl(tag);
   }, [tag]);

   const onChange = (event) => {
      setSearchTag(event.target.value);
   }
   const onSearch = (getGiphyUrl2) => {
      getGiphyUrl(searchTag)
      console.log('search', searchTag);
   }

   return (
      <div className="giphy-form">
         <div className="giphy-box">
            <h2>Giphy pages</h2>
            <div className="gif">
               { giphyUrl && (
                  <img
                     src={ giphyUrl }
                     alt="gif"
                  />
               ) }
            </div>

            <div className="search-box">
               <input
                  type="text"
                  placeholder="search"
                  value={ searchTag }
                  onChange={ onChange }
               />
               <button onClick={ () => onSearch(searchTag) }>search</button>

            </div>
         </div>
      </div>
   )
}

export { NewGiphyRandom };