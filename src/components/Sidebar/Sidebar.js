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
                    <Label style={{justifyContent: 'center'}}>Favorites</Label>
                    <Label style={{justifyContent: 'center'}}>Playlists</Label>
                    <Label style={{justifyContent: 'center'}}>About</Label>
                </Content>
            </Container>
        </>
    )
}

export default Sidebar
