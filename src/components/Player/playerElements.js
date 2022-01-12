import styled from "styled-components";
import {BiPlay, BiPause} from 'react-icons/bi'

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
    border: 1px solid #adb5bd;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const CircleIn = styled.div`
    width: 30%;
    height: 30%;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const PlayIcon = styled(BiPlay)`
    font-size: 4em;
    cursor: pointer;
    position: absolute;
    z-index: 100;
`

export const PauseIcon = styled(BiPause)`
    font-size: 4em;
    cursor: pointer;
    position: absolute;
    z-index: 100;
    transform: translateX(-2px);
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

export const Title = styled.span`
    font-size: 4vw;
    font-weight: 600;
    font-family: var(--font_2);
`

export const Time = styled.span`
    font-size: 1.5vw;
    font-family: var(--font_2);
    font-weight: 300;
`

export const Bottom = styled.div`
    width: 100%;
    margin-top: 10px;
`

export const Progressbar = styled.input`
    width: 100%;
    height:  3px;
    background: #adb5bd;
    position: relative;
    -webkit-appearance: none;

    &::-webkit-slider-runnable-track {
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        content: '';
        z-index: -1;
    }


`

export const Video = styled.video`
    height: 60%;
    position: absolute;
    right: 50px;
    bottom: -150px;
`   

export const SetMusicBar = styled.div`
    width: 40%;
    height: 50px;
    position: absolute;
    transform: translate(80px, 80px);
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40%;
        background: black;
        height: 2px;
        content: '';
        transform: translate(-50%, -50%); 
    }
`