import React, { useEffect } from "react";
import { Container } from "./aboutElements";
import { useAnimation,  useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";


const About = () => {

  const { scrollYProgress } = useViewportScroll()
  
  return (
    <>
      <Container>

      </Container>
    </>
  );
};

export default About;
