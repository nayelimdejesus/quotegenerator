import React, { useState } from "react";
import '../../FetchAPI.css';

function FetchAPI(){
  const [data, setData] = useState([]);
const apiGet = () => {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((json) => {
      console.log(json); 
      setData(json);
    });

  
};

return( 
  <div>
    <div class = "card">
      <h1>Quote of the Day</h1>
      <p>{JSON.stringify(data.content)}</p>
      <p class = "authorName">~ {(data.author)}</p>
      <br/>
      <br/>
      <button onClick={apiGet}>Get Quote</button>

    </div>
  </div>
  );
}

export default FetchAPI;

