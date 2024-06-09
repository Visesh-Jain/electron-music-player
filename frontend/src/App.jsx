import React from "react";
import YTMusic from "ytmusic-api";

const ytmusic = new YTMusic();
await ytmusic.initialize(/* Optional: Custom cookies */);

ytmusic.search("Never gonna give you up").then((songs) => {
  console.log(songs);
});
function App() {
  return (
    <div>
      <p>Welcome to your Electron application.</p>
      <iframe
        width="320"
        height="240"
        src="https://www.youtube.com/embed/6hzrDeceEKc"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
    </div>
  );
}

export default App;
