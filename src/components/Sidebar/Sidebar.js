import React, {useContext} from "react";
import { Context } from "../../App";
import { Container, Content, Label } from './sidebarElements'

const Sidebar = () => {

    const context = useContext(Context)
    const {visibility, setVisibility} = context; 

    return (
        <>
            <Container visibility={visibility}>
                <Content>
                    <Label to="/favorites" style={{justifyContent: 'center'}} onClick={() => setVisibility(false)}>Favorites</Label>
                    <Label to="" style={{justifyContent: 'center'}}>Playlists</Label>
                    <Label to="" style={{justifyContent: 'center'}}>About</Label>
                </Content>
            </Container>
        </>
    )
}

export default Sidebar
