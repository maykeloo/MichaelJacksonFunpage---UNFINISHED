import React, {useContext} from "react";
import { Container, Line1, Line2, Line3, MenuAndImage, Menubox, Menubar, Image, Buttonsbar, Box1, Text, Box2, List, ListElement, Box3} from "./navbarElements";

import { Context } from "../../App";

import image1 from '../../images/michael1.jpg'

const Navbar = () => {

    const context = useContext(Context);
    const { visibility, setVisibility } = context;

  return (
    <>
      <Container>
        <MenuAndImage>
          <Menubar>
            <Menubox onClick={setVisibility}>
              <Line1 visibility={visibility}/>
              <Line2 visibility={visibility}/>
              <Line3 visibility={visibility}/>
            </Menubox>
          </Menubar>
          <Image src={image1}/>
        </MenuAndImage>
        <Buttonsbar>
            <Box1>
                <Text style={{fontWeight: 'bold'}}>
                    Vibe '90s
                </Text>
                <Text style={{fontWeight: '100'}}>
                    The 
                    <br />
                    King
                </Text>
            </Box1>

            <Box2>
                <List>
                    <ListElement>Add to Favorite</ListElement>
                    <ListElement>Hide a Track</ListElement>
                    <ListElement>Add to Playlist</ListElement>
                    <ListElement>To Share</ListElement>
                </List>
            </Box2>

            <Box3>
                <Text>
                    About
                </Text>
            </Box3>
        </Buttonsbar>
      </Container>
    </>
  );
};

export default Navbar;
