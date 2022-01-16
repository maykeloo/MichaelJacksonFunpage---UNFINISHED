import React, { useContext } from "react";
import {
  Container,
  Line1,
  Line2,
  Line3,
  MenuAndImage,
  Menubox,
  Menubar,
  Image,
  Buttonsbar,
  Box1,
  Text,
  Box2,
  List,
  ListElement,
  Box3,
} from "./navbarElements";
import { Context } from "../../App";
import image1 from "../../images/michael1.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, deleteFavourite } from "../../Redux/actions";

const Navbar = () => {

  const context = useContext(Context);
  const { visibility, setVisibility, currentlyPlaying } = context;
  const dispatch = useDispatch();

  return (
    <>
      <Image src={image1} />
      <Menubox onClick={setVisibility}>
        <Line1 visibility={visibility} />
        <Line2 visibility={visibility} />
        <Line3 visibility={visibility} />
      </Menubox>
      <Container>
        <Buttonsbar>
          <Box1>
            <Text style={{ fontWeight: "bold" }}>Vibe '90s</Text>
            <Text style={{ fontWeight: "100" }}>The King</Text>
          </Box1>

          <Box2>
            <List>
              <ListElement onClick={() => dispatch(addFavourite(currentlyPlaying))}>
                Add to Favorite
              </ListElement>
              <ListElement>To Share</ListElement>
            </List>
          </Box2>

          <Box3>
            <Text id="about">About</Text>
          </Box3>
        </Buttonsbar>
      </Container>
    </>
  );
};

export default Navbar;
