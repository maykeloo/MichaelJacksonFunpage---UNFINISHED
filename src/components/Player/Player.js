/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";
import {
  Bottom,
  CircleIn,
  Video,
  CircleOut,
  Container,
  PlayIcon,
  Progressbar,
  ProgressBox,
  Time,
  Title,
  Top,
  SetMusicBar,
  PauseIcon,
  Icon,
  LineBox,
  Line,
  CurrentTime,
} from "./playerElements";

import { music } from "./Musics";

import { motion, AnimatePresence } from "framer-motion";

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 3,
    transition: {
      yoyo: Infinity,
      duration: 5,
      ease: "easeInOut",
    },
  },
};

const playerIcon = {
  start: {
    x: -100,
  },

  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const videoExit = {
  start: {
    x: 400,
    opacity: 0,
  },

  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
        ease: [0.28, 1.09, 0.57, 1.01],
      },
  },

  exit: {
      x: '-100vw',
      transition: {
        duration: 0.3,
        ease: [0.28, 1.09, 0.57, 1.01],
      },
  }
};

const titleExit = {
  start: {
    x: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
        duration: 1
    }
  },

  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Player = () => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef(0);
  const video = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [musicCounter, setMusicCounter] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    setTimeout(() => setContentVisible(true), 2000);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      video.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      video.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    video.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / progressBar.current.max) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const setMusic = (value) => {
    setMusicCounter(value);
    setIsPlaying(false);
  };

  const setNumber = () => {
      setContentVisible(false)
      setTimeout(() => setContentVisible(true), 1000)
  }

  return (
    <>
      <Container>
        <CircleOut>
          <motion.svg
            viewBox="0 0 300 300"
            width="600pt"
            height="600pt"
            style={{ position: "absolute" }}
          >
            <motion.g clip-path="url(#_clipPath_wKqBB4wDunVlw1hgA0d012ckapfXZ93u)">
              <motion.circle
                vector-effect="non-scaling-stroke"
                cx="150"
                cy="150"
                r="150"
                fill="none"
              />
              <motion.circle
                vector-effect="non-scaling-stroke"
                cx="150"
                cy="150"
                r="150"
                fill="none"
                mask="url(#_mask_5FAlXdNasf0jay6ZTiwI8Mnt7I992Zs0)"
                stroke-width="4"
                stroke="rgb(85,85,85)"
                stroke-linejoin="miter"
                stroke-linecap="square"
                stroke-miterlimit="3"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.g>
          </motion.svg>
          <CircleIn>
            <motion.svg viewBox="0 0 300 300" width="300pt" height="300pt">
              <motion.g clip-path="url(#_clipPath_wKqBB4wDunVlw1hgA0d012ckapfXZ93u)">
                <mask id="_mask_5FAlXdNasf0jay6ZTiwI8Mnt7I992Zs0">
                  <circle
                    vector-effect="non-scaling-stroke"
                    cx="150"
                    cy="150"
                    r="150"
                    fill="white"
                    stroke="none"
                  />
                </mask>
                <motion.circle
                  vector-effect="non-scaling-stroke"
                  cx="150"
                  cy="150"
                  r="150"
                  fill="none"
                />
                <motion.circle
                  vector-effect="non-scaling-stroke"
                  cx="150"
                  cy="150"
                  r="150"
                  fill="none"
                  mask="url(#_mask_5FAlXdNasf0jay6ZTiwI8Mnt7I992Zs0)"
                  stroke-width="4"
                  stroke="rgb(85,85,85)"
                  stroke-linejoin="miter"
                  stroke-linecap="square"
                  stroke-miterlimit="3"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </motion.g>
            </motion.svg>
            <ProgressBox>
              <Top>
                  <div style={{width: '60%', height: '55px'}}>
              <AnimatePresence>
              {contentVisible &&
                <Title  variants={titleExit}
                        initial="start"
                        exit='exit'
                        animate="animate">
                            {music[musicCounter].title}
                </Title>}
                </AnimatePresence>
                </div>
                <CurrentTime>
                  {calculateTime(currentTime)} / {calculateTime(duration)}
                </CurrentTime>
              </Top>
              <Bottom>
                <Progressbar
                  type="range"
                  ref={progressBar}
                  onChange={changeRange}
                  defaultValue="0"
                />
              </Bottom>
            </ProgressBox>
          </CircleIn>
          <SetMusicBar>
            <Time
              style={{ cursor: "pointer" }}
              disabled={musicCounter === 0}
              onClick={() => {
                setMusic(musicCounter - 1,'sub')
                setNumber()
            }}
            >
              Previous
            </Time>
            <LineBox>
              <Line />
            </LineBox>
            <Time
              style={{ cursor: "pointer" }}
              disabled={musicCounter === 5}
              onClick={() => {
                  setMusic(musicCounter + 1, 'add')
                  setNumber()}}
            >
              Next
            </Time>
          </SetMusicBar>
          {isPlaying ? (
            <Icon variants={playerIcon} initial="start" animate="animate">
              <PauseIcon onClick={togglePlayPause} />
            </Icon>
          ) : (
            <Icon variants={playerIcon} initial="start" animate="animate">
              <PlayIcon onClick={togglePlayPause} />
            </Icon>
          )}
        </CircleOut>
        <audio
          src={music[musicCounter].audio}
          ref={audioPlayer}
          style={{ display: "none" }}
        ></audio>
      </Container>
      <AnimatePresence>
      {contentVisible && <Video
        variants={videoExit}
        initial="start"
        exit="exit"
        animate="animate"
        src={music[musicCounter].video}
        muted
        ref={video}
        playsInline
      />}
    </AnimatePresence>
    </>
  );
};

export default Player;
