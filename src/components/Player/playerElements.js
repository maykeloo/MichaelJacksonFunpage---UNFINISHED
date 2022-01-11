import styled from "styled-components";
import {BiPlay} from 'react-icons/bi'

export const Container = styled.div`
    width: 110vh;
    height: 110vh;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50vh);
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
`

export const ProgressBox = styled.div`
    width: 40vw;
    position: absolute;
    height: 200px;
    top: -150px;
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
    font-size: 5em;
    font-weight: 600;
    font-family: var(--font_2);
`

export const Time = styled.span`
    font-size: 2em;
    font-family: var(--font_2);
    font-weight: 300;
`

export const Bottom = styled.div`
    width: 100%;
    margin-top: 10px;
`

export const Progressbar = styled.div`
    width: 100%;
    height:  3px;
    background: #adb5bd;
    position: relative;

    &:after {
        position: absolute;
        width: 60%;
        height: 100%;
        background: black;
        content: '';
    }
`