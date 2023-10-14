import React from "react";

function FetchAPI(){
const apiGet = () => {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((json) => console.log(json));
};

return( 
  <div>
    My API <br/>
    <button>Fetch API</button>
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
