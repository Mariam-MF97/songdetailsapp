import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
    if (!song) {
        return <h3 style={{color:"red"}}>Please Select a Song.</h3>
    }
    return (
      <div>
        <h3 className="header">
          Song Name: <span style={{ color: "blue" }}>{song.title}</span>
        </h3>
        <h3 className="item">
          Song Duration: <span style={{ color: "blue" }}>{song.duration}</span>
        </h3>
        <h3 className="item">
          Singer Name: <span style={{ color: "blue" }}>{song.singer}</span>
        </h3>
      </div>
    );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
