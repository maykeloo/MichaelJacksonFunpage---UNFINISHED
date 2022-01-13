import React from 'react'
import { Container, InfoBox, Name, NameText, Text, TextLabel, Top, Video } from './descriptionElements'

import { motion } from 'framer-motion'

const animation = {
    start: {
        y: -200
    },

    animate: {
        y: 0,

        transition: {
        duration: 1,        
        type:'spring',
        stiffness: 50,}
    }
}

const name = {
    start: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

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
                        <NameText className="name" variants={name} initial="start" animate="animate">
                            <TextLabel>
                            <motion.div variants={animation}>M</motion.div>
                            <motion.div variants={animation}>i</motion.div>
                            <motion.div variants={animation}>c</motion.div>  
                            <motion.div variants={animation}>h</motion.div>  
                            <motion.div variants={animation}>a</motion.div>  
                            <motion.div variants={animation}>e</motion.div> 
                            <motion.div variants={animation}>l</motion.div> 
                            </TextLabel>
                              <TextLabel>
                              <motion.div variants={animation}>J</motion.div>
                            <motion.div variants={animation}>a</motion.div>
                            <motion.div variants={animation}>c</motion.div>  
                            <motion.div variants={animation}>k</motion.div>  
                            <motion.div variants={animation}>s</motion.div>  
                            <motion.div variants={animation}>o</motion.div> 
                            <motion.div variants={animation}>n</motion.div> 
                            </TextLabel>
                        </NameText>
                    </Name>
                </InfoBox>
            </Container>
        </>
    )
}

export default Description
