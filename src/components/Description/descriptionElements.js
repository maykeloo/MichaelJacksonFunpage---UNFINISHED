import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 70vh;
    position: absolute;
    bottom: 0;
`

export const InfoBox = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
`

export const Top = styled.div`
    width: 55%;
    height: 40%;
`

export const Text = styled.p`
    text-indent: 100px;
    font-size: 16px;
    font-family: var(--font_1);
    font-weight: 300;
`

export const Name = styled.div`
    width: 80%;
`

export const NameText = styled.p`
    font-size: 15em;
    text-indent: 200px;
    font-family: var(--font_1);
    line-height: 200px;
    font-weight: 300;
`