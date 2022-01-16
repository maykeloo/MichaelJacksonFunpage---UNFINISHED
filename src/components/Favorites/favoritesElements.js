import styled from "styled-components";
import {MdOutlineClose, MdIosShare, MdOutlineKeyboardArrowUp} from 'react-icons/md'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    height: 90%;
`

export const Titlebar = styled.div`
    width: 100%;
    height: 10%;
    font-size: 3em;
    font-family: var(--font_1); 
    letter-spacing: -2px;
    font-weight: 900;
    font-style: italic;
`

export const Boxes = styled.div`
    height: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const LeftSide = styled.div`
    display: flex;
`

export const Video = styled.video`
    width: 30%;
    object-fit: cover;
    height: 100%;
`

export const Description = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Title = styled.span`
    font-size: 7em;
    font-family: var(--font_1); 
    letter-spacing: -2px;
`

export const Infobar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const ShowOnShop = styled.button`
    padding: 10px;
    background: white;
    color: black;
    font-family: var(--font_1); 
    cursor: pointer;
    font-weight: 500;
    border: 1px solid black;

    &:hover {
        background: black;
        color: white;
    }
`

export const Year = styled.span`
    font-size: 2em;
    font-family: var(--font_1); 
    font-weight: 200;
`

export const ButtonBar = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
`

export const IconBox = styled.div`

`

export const CloseIcon = styled(MdOutlineClose)`
    cursor: pointer;
    font-size: 2em;
`

export const ShareIcon = styled(MdIosShare)`
    cursor: pointer;
    font-size: 2em;
`

export const ArrowIcon = styled(MdOutlineKeyboardArrowUp)`
    cursor: pointer;
    font-size: 2em;
`