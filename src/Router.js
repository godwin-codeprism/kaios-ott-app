import React, { useState } from "react";
import App from "./App";
import VideoScreen from "./pages/videoScreen";

export default function Router() {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <React.Fragment>
      {showPlayer ? (
        <VideoScreen
          goBack={() => {
            setShowPlayer(false);
          }}
        />
      ) : (
        <App
          showPlayer={() => {
            setShowPlayer(true);
          }}
        />
      )}
    </React.Fragment>
  );
}
