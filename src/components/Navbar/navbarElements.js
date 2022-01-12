import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    z-index: 4;
`

export const Menubox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 7px;
    top: 30px;
    left: 30px;     
    cursor: pointer;
    z-index: 11;    
`

export const Line1 = styled.span`
    width: 50px;
    height: 2px;
    background: ${({visibility}) => visibility ? 'white' : 'black'};
    display: block;
    transition: 1s;
    transform: ${({visibility}) => visibility ? 'rotate(45deg) translateX(5px) translateY(10px)' : ''};
`

export const Line2 = styled.span`
    width: 25px;
    height: 2px;
    display: block;
    transition: 1s;
    background: black;
    opacity: ${({visibility}) => visibility ? '0' : '1'};
    transform: ${({visibility}) => visibility ? 'translateX(10px)' : ''};
`

export const Line3 = styled.span`
    width: ${({visibility}) => visibility ? '50px' : '40px'};;
    height: 2px;
    background: ${({visibility}) => visibility ? 'white' : 'black'};
    display: block;
    transition: 1s;
    z-index: 6;
    transform: ${({visibility}) => visibility ? 'rotate(-45deg) translateX(2px) translateY(-8px)' : ''};
`


export const Buttonsbar = styled.div`
    width: 50%;
    margin-right: 100px;
    height: 100%;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    z-index: -2;
`   

export const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
    `

export const Text = styled.span`
    font-size: 1.5vw;
    font-family: var(--font_1);
`


export const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const List = styled.ul`
    width: 300px;
    line-height: 2em;
`

export const ListElement = styled.li`
    list-style-type: none;
    font-family: var(--font_3);
    transition: 0.7s;
    cursor: pointer;
    font-size: 1.3vw;
    font-weight: 300;

    &:hover {
        transform: skewX(-20deg);
    };
`

export const Box3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const Image = styled.img`
    position: absolute;
    top: 0;
    left: 50px;
    width: 40%;
    z-index: 1;
`

export const MenuAndImage = styled.div`
    width: 40%;
`
