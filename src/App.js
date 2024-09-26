import React from "react"
import StarRating from "./StarRating";

function App() {
  return (
    <div className="App">
        <h1>Product Rating</h1>
        <StarRating totalStars={5}/> {/* You can pass different values for totalStars */}
    </div>
  );
}

export default App;
