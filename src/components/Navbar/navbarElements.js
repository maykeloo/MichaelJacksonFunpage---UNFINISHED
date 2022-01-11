import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    z-index: 2;
`

export const MenuAndImage = styled.div`
    width: 40%;
    height: 100%;   
    display: flex;
`

export const Menubar = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const Menubox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 40px;
    cursor: pointer;
    height: 30px;
`

export const Line1 = styled.span`
    width: 50px;
    height: 2px;
    background: black;
    display: block;
    transition: 1s;


    transform: ${({visibility}) => visibility ? 'rotate(45deg) translateX(5px) translateY(10px)' : ''};
`

export const Line2 = styled.span`
    width: 25px;
    height: 2px;
    background: black;
    display: block;
    transition: 1s;
    opacity: ${({visibility}) => visibility ? '0' : '1'};
    transform: ${({visibility}) => visibility ? 'translateX(10px)' : ''};
`

export const Line3 = styled.span`
    width: ${({visibility}) => visibility ? '50px' : '40px'};;
    height: 2px;
    background: black;
    display: block;
    transition: 1s;

    transform: ${({visibility}) => visibility ? 'rotate(-45deg) translateX(2px) translateY(-8px)' : ''};
`

export const Image = styled.img`
    width: 30vw;
    object-fit: cover;
`

export const Buttonsbar = styled.div`
    width: 50%;
    margin-right: 100px;
    height: 100%;
    padding: 30px;
    display: flex;
    justify-content: space-between
`   

export const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const Text = styled.span`
    font-size: 1.5em;
    font-family: var(--font_1)
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
    font-size: 1.3em;
    font-weight: 300;

    &:hover {
        letter-spacing: 4px;
    }
`

export const Box3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`