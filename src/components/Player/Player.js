import React from 'react'
import { Bottom, CircleIn, Video, CircleOut, Container, PlayIcon, Progressbar, ProgressBox, Time, Title, Top, SetMusicBar } from './playerElements'

import video1 from '../../video/earthsong.mp4'

const Player = () => {
    return (
        <>
           <Container>
                <CircleOut>
                    <CircleIn>
                        <ProgressBox>
                            <Top>
                                <Title>Earthsong</Title>
                                <Time>2:12 / 3:46</Time>
                            </Top>
                            <Bottom>
                                <Progressbar>
                                    
                                </Progressbar>
                            </Bottom>
                        </ProgressBox>
                        <PlayIcon/>
                    </CircleIn>
                    <SetMusicBar>
                        <Time>Previous</Time>
                        <Time>Next</Time>
                    </SetMusicBar>
                </CircleOut>
            </Container> 
            <Video src={video1} muted autoPlay playsInline/> 
        </>
    )
}

export default Player
