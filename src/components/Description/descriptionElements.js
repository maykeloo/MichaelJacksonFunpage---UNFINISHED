import styled from "styled-components";
import { motion } from 'framer-motion'


export const Container = styled.div`
    width: 60%;
    display: flex;
    height: 80vh;
    position: absolute;
    bottom: 0;
    z-index: 3;
`

export const InfoBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
`

export const Top = styled.div`
    width: 70%;
    height: 40%;
`

export const Text = styled.p`
    text-indent: 100px;
    font-size: 1.2vw;
    font-family: var(--font_1);
    font-weight: 300;
    mix-blend-mode: lighten;
    font-style: italic;
    color: #252422;
`

export const Name = styled.div`
    width: 80%;
`

export const NameText = styled(motion.div)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const TextLabel = styled.div`
    display: flex;
    font-size: 11vw;
    font-family: var(--font_1);
    line-height: 20vh;
    font-weight: 300;
    height: 50%;
`

