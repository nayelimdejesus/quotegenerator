import React, { useEffect, useState } from "react";
import '../../FetchAPI.css';

function FetchAPI(){
  const [quote, setQuotes] = useState([]);
const apiGet = () => {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((json) => {
      console.log(json); 
      setQuotes(json);
    });

  
};
useEffect(() => {
  apiGet();
}, []);

return( 
  <div>
    <div class = "card">
      <h1>Quote of the Day</h1>
      <p>{JSON.stringify(quote.content)}</p>
      <p class = "authorName"> {(quote.author)}</p>
      <br/>
      <br/>
      <button onClick={apiGet}>Get Quote</button>

    </div>
  </div>
  );
}

export default FetchAPI;