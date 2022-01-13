import styled from "styled-components";
import {BiPlay, BiPause} from 'react-icons/bi'

import { motion } from "framer-motion";

export const Container = styled.div`
    width: 130vh;
    height: 130vh;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-70vh);
    z-index: 0;
`

export const CircleOut = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const CircleIn = styled.div`
    width: 30%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Icon = styled(motion.div)`
    font-size: 4em;
    cursor: pointer;
    position: absolute;
    z-index: 100;
    transform: translateX(-2px);`

export const PlayIcon = styled(BiPlay)`

`

export const PauseIcon = styled(BiPause)`

`

export const ProgressBox = styled.div`
    width: 35vw;
    position: absolute;
    top: 0px;
    right: -15vw;
    display: flex;
    flex-direction: column;
`

export const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const Title = styled(motion.div)`
    font-size: 2.5vw;
    font-weight: 600;
    font-family: var(--font_2);
`

export const CurrentTime = styled.span`
        font-size: 1.5vw;
    font-family: var(--font_2);
    font-weight: 300;
    transition: 0.3s;
    justify-self: flex-end;
`

export const Time = styled.button`
    border: 0;
    background: transparent;
    font-size: 1.5vw;
    font-family: var(--font_2);
    font-weight: 300;
    transition: 0.3s;
    justify-self: flex-end;

    &:disabled {
        color: grey;
    }

    &:hover {
        letter-spacing: 5px;
}
`

export const Bottom = styled.div`
    width: 100%;
    margin-top: 10px;
`

export const Progressbar = styled.input`
    width: 100%;
    height:  11px;
    --bar-bg: #ffe3d4;
  --seek-before-width: 0;
  --seek-before-color: #ffc2a1;
  --knobby: #264653;
  --selectedKnobby: #26c9c3;
    position: relative;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-accelerator: none;
    
    &::-webkit-slider-thumb {
opacity: 0;
}

&::before {
  content: '';
  height: 10.5px;
  width: var(--seek-before-width);
  background-color: black;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 1;
  cursor: pointer;
}

&:active::-webkit-slider-thumb {
  transform: scale(1.2);
  background: red;
}

    &::-webkit-slider-runnable-track {
  position: relative;
    border: 1px solid black;
  width: 100%;
  height: 11px;
  outline: none;
  z-index: 1;
}
`

export const Video = styled(motion.video)`
    height: 60%;
    position: absolute;
    right: 10px;
    bottom: -250px;
`   

export const LineBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
`

export const Line = styled.span`
    display: block;
    width: 80%;
    height: 2px;
    background: black;
`

export const SetMusicBar = styled.div`
    width: 40%;
    height: 50px;
    position: absolute;
    transform: translate(80px, 80px);
    display: flex;
    align-items: center;
    justify-content: space-between;
`