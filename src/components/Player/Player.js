/* eslint-disable react-hooks/exhaustive-deps */
import React, {createRef, useState, useEffect} from 'react'
import { Bottom, CircleIn, Video, CircleOut, Container, PlayIcon, Progressbar, ProgressBox, Time, Title, Top, SetMusicBar, PauseIcon } from './playerElements'

import { music } from './Musics'


const Player = () => {

    const audio = createRef();
    const video = createRef();
    const progressBar = createRef();
    const animation = createRef();

    const [playing, setPlaying] = useState(false)
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
       const seconds = Math.floor(audio.current.duration);
       setDuration(seconds)
       progressBar.current.max = seconds;
    }, [audio?.current?.loadedmetadata, audio?.current?.readyState])

    const settingPlaying = () => {
        if(!playing) {
            setPlaying(true)
            audio.current.play();
            video.current.play();
            
        } else {
            setPlaying(false)
            audio.current.pause();
            video.current.pause();
        }
    }

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
      }

    const changeTime = () => {
        audio.current.currentTime = progressBar.current.value;
        setCurrentTime(progressBar.current.value)

    }



    return (
        <>
           <Container>
                <CircleOut>
                    <CircleIn>
                        <ProgressBox>
                            <Top>
                                <Title>{music[0].title}</Title>
                                <Time>{calculateTime(currentTime) }</Time>
                            </Top>
                            <Bottom>
                                <Progressbar
                                type="range"
                                step="0.01"
                                ref={progressBar}
                                onChange={changeTime}
                                />
                            </Bottom>
                        </ProgressBox>
                    </CircleIn>
                    <SetMusicBar>
                        <Time>Previous</Time>
                        <Time>Next</Time>
                    </SetMusicBar>
                    {playing ? <PauseIcon onClick={settingPlaying}/> : <PlayIcon onClick={settingPlaying}/>}
                </CircleOut>
                <audio src={music[0].audio} ref={audio} style={{display: 'none'}}></audio>
            </Container> 
            <Video src={music[0].video} muted ref={video} playsInline/> 
        </>
    )
}

export default Player
