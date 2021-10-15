import React from "react";
import SongList from "./SongList";
import SongDetails from "./SongDetails";

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: "20px" }}>
      <h1> SONG DETAILS APP</h1>
      <div
        className="ui row"
        style={{ border: "2px solid", borderRadius: "20px", padding: "30px" }}
      >
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
