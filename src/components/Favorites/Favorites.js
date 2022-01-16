import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    ArrowIcon,
  Box,
  Boxes,
  ButtonBar,
  CloseIcon,
  Container,
  Content,
  Description,
  Duration,
  IconBox,
  Infobar,
  LeftSide,
  ShareIcon,
  ShowOnShop,
  Title,
  Titlebar,
  Video,
  Year,
} from "./favoritesElements";
import { useDispatch } from "react-redux";
import { addFavourite, deleteFavourite } from "../../Redux/actions";

const Favourites = () => {
  const selectedData = useSelector((state) => state.fav);

    const [list, setList] = useState();

    useEffect(() => {
        setList(selectedData)
    }, [selectedData])

 const deleteItem = index => {
     const list = [...selectedData];
     list.splice(index, 1);
     setList(list)
 }

 const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Content>
          <Titlebar>Favourites</Titlebar>
          <Boxes>
            {selectedData.map((music, index) => (
              <Box>
                <LeftSide>
                <Video src={music.video} muted loop playsInline autoPlay />
                <Description>
                    <Title>{music.title}</Title>
                    <Infobar>
                        <Year>{music.year}</Year>
                        <ShowOnShop>Show on shop</ShowOnShop>
                    </Infobar>
                </Description>
                </LeftSide>
                <ButtonBar>
                    <IconBox><CloseIcon onClick={() => {
                        dispatch(deleteFavourite(index)) 
                    }}/></IconBox>
                    <IconBox><ShareIcon/></IconBox>
                    <IconBox><ArrowIcon/></IconBox>
                </ButtonBar>
              </Box>
            ))}
          </Boxes>
        </Content>
      </Container>
    </>
  );
};

export default Favourites;
