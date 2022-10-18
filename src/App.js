import "./App.css";
import React, { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "Movies",
  },
  {
    title: "TV Shows",
  },
  {
    title: "Continue watching",
  },
  {
    title: "Latest Hits",
  },
];

function App() {
  const [activeIndex, _setActiveIndex] = useState(0);
  const activeIndexRef = useRef(activeIndex);
  const setActiveIndex = (_activeIndex) => {
    activeIndexRef.current = _activeIndex;
    _setActiveIndex(_activeIndex);
  };

  useEffect(() => {
    document.querySelector('[tabindex="0"]').focus();
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleKeydown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        nav(-10);
        break;
      case "ArrowDown":
        nav(10);
        break;
      case "ArrowRight":
        nav(1);
        break;
      case "ArrowLeft":
        nav(-1);
        break;
      default:
        break;
    }
  };

  const nav = (move) => {
    const next =
      activeIndexRef.current + move < 0 ? 0 : activeIndexRef.current + move;
    const targetElement = document.querySelector(`[tabindex="${next}"]`);
    setActiveIndex(next);
    if (targetElement) {
      targetElement.focus();
    }
  };

  return (
    <div className="App">
      <div className="banner">
        <img alt="banner" src="https://picsum.photos/200/300"></img>
      </div>

      <div className="swimLaneContainer">
        {data.map((swimlane, j) => {
          return (
            <React.Fragment key={j}>
              <h6>{swimlane.title}</h6>

              <ul className="swimLane">
                {Array(10)
                  .fill("a")
                  .map((x, i) => {
                    const itemIndex = parseInt(`${j}${i}`);
                    return (
                      <li
                        key={itemIndex}
                        className={`showCard ${
                          itemIndex === activeIndex ? "focused" : ""
                        }`}
                        style={{
                          backgroundImage: `url(https://source.unsplash.com/random/320x180?sig=${itemIndex})`,
                        }}
                        tabIndex={itemIndex}
                      ></li>
                    );
                  })}
              </ul>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default App;
