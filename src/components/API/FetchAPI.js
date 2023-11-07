import React, { useState } from "react";

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
    <h1>Quote of the Day</h1>
    <br/>
    {JSON.stringify(data.content)}
    <br/>
    <br/>
    <button onClick={apiGet}>Next Quote</button>
  </div>
  );
}

export default FetchAPI;



  // async function randomQuote() {
  //   const response = await fetch('https://api.quotable.io/random')
  //   const quote = await response.json()
    
  //   // Output the quote and author name
  //   console.log(quote.content)
  //   console.log(`- ${quote.author}`)
  // }
