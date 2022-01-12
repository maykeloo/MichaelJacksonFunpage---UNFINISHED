import React, {createRef, useState} from 'react'
import { Bottom, CircleIn, Video, CircleOut, Container, PlayIcon, Progressbar, ProgressBox, Time, Title, Top, SetMusicBar } from './playerElements'

import { music } from './Musics'


const Player = () => {

    const audio = createRef();
    const video = createRef();
    const [playing, setPlaying] = useState(false)

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

    return (
        <>
           <Container>
                <CircleOut>
                    <CircleIn>
                        <ProgressBox>
                            <Top>
                                <Title>{music[0].title}</Title>
                                <Time></Time>
                            </Top>
                            <Bottom>
                                <Progressbar>
                                    
                                </Progressbar>
                            </Bottom>
                        </ProgressBox>
                    </CircleIn>
                    <SetMusicBar>
                        <Time>Previous</Time>
                        <Time>Next</Time>
                    </SetMusicBar>
                </CircleOut>
                <PlayIcon onClick={settingPlaying}/>
                <audio src={music[0].audio} ref={audio} style={{display: 'none'}}></audio>
            </Container> 
            <Video src={music[0].video} muted ref={video} playsInline/> 
        </>
    )
}

export default Player
