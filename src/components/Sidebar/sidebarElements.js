import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    position: fixed;
    transition: 1s cubic-bezier(.83,.04,1,.75);
    display: flex;
    z-index: 10;   
    justify-content: center;
    top: ${({visibility}) => visibility ? '0' : '-100vh'};
`
export const Content = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 100px;
    justify-content: space-around;
`

export const Label = styled(Link)`
    width: 100%;
    height: 20%;
    border-bottom: 2px solid grey;
    display: flex;
    align-items: flex-end;
    font-size: 10vw;
    font-family: var(--font_1);
    cursor: pointer;
    transition: 1s;
    -webkit-text-stroke: 2px white;
    color: black;
    position: relative;
    text-decoration: none;

    &:hover {   
            transform: skewX(-5deg);
            color: white;
            width: 80%;
    }
    
`