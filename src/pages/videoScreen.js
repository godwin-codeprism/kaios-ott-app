import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
// import { useNavigate } from 'react-router-dom';

export default function VideoScreen({goBack}) {
  // const navigate = useNavigate();
  const [playing, _setPlaying] = useState(false);

  const playingRef = useRef(playing);

  const setPlaying = (_playing) => {
    playingRef.current = _playing;
    _setPlaying(_playing);
  }

  const _onReady = () => {
    setPlaying(true);
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
  
    return () => {
    document.removeEventListener('keydown', handleKeydown);
      
    }
  }, []);

  const handleKeydown = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "Enter":
        setPlaying(!playingRef.current);
        break;
      case "End":
      case "Backspace":  
      case "SoftRight":  
        // navigate('/');
        goBack();
        break;    
      default:
        break;
    }
  };

  return (
    <div className='videoContainer'>
      <ReactPlayer width={320} controls={true}  playing={playing} onReady={_onReady} url='https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/m3u8s/11331.m3u8' />
    </div>
  )
}