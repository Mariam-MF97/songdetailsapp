import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Hero", duration: "4:23", singer: "Enrique Iglesias" },
    { title: "Perfect", duration: "4:40", singer: "Ed Sheeran" },
    { title: "I know", duration: "3:46", singer: "Drake Bell" },
    { title: "Diamonds", duration: "4:43", singer: "Rihanna" },
    { title: "Happier Than Ever", duration: "5:16", singer: "Billie Eilish" },
    { title: "Thank you, Next", duration: "5:31", singer: "Ariana Grande" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
