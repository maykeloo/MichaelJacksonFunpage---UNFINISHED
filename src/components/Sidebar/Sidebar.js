import React, {useContext} from "react";
import { Context } from "../../App";
import { Container, Content, Label } from './sidebarElements'

const Sidebar = () => {

    const context = useContext(Context)
    const {visibility} = context; 

    return (
        <>
            <Container visibility={visibility}>
                <Content>
                    <Label>Favorites</Label>
                    <Label style={{justifyContent: 'center'}}>Playlists</Label>
                    <Label style={{justifyContent: 'flex-end'}}>About</Label>
                </Content>
            </Container>
        </>
    )
}

export default Sidebar
