import React from 'react'
import { Container, InfoBox, Name, NameText, Text, Top } from './descriptionElements'

const Description = () => {
    return (
        <>
            <Container>
                <InfoBox>
                    <Top>
                        <Text>
                        Was an American singer, songwriter and dancer. Dubbed the "King of Pop", he is regarded as one of the most significant cultural figures of the 20th century. Over a four-decade career, his contributions to music, dance and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across many music genres; through stage and video performances, he popularized complicated dance moves such as the moonwalk, to which he gave the name, as well as the robot. He is the most awarded music artist in history.
                        </Text>
                    </Top>
                    <Name>
                        <NameText>
                            Michael <br /> Jackson
                        </NameText>
                    </Name>
                </InfoBox>
            </Container>
        </>
    )
}

export default Description
