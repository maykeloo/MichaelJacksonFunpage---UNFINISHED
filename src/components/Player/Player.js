import React from 'react'
import { Bottom, CircleIn, CircleOut, Container, PlayIcon, Progressbar, ProgressBox, Time, Title, Top } from './playerElements'



const Player = () => {
    return (
        <>
           <Container>
                <CircleOut>
                    <CircleIn>
                        <ProgressBox>
                            <Top>
                                <Title>Gypsy Eyes</Title>
                                <Time>2:12 / 3:46</Time>
                            </Top>
                            <Bottom>
                                <Progressbar>
                                    
                                </Progressbar>
                            </Bottom>
                        </ProgressBox>
                        <PlayIcon/>
                    </CircleIn>
                </CircleOut>
            </Container> 
        </>
    )
}

export default Player
