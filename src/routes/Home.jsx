import { Box, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import ImageBox from '../components/home/ImageBox';
import mladi1 from '../assets/images/mladi1.jpg';
import mladi2 from '../assets/images/mladi2.jpg';
import mladi3 from '../assets/images/mladi3.jpg';
import pristavbaVzadu from '../assets/images/pristavba_vzadu.jpg';
import pristavbaZhora from '../assets/images/pristavba_zhora.jpg';
import pristavbaVpredu from '../assets/images/pristavba_vpredu.jpg';

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

const Home = () => (
  <div>
    <Typography align="center">Centrum pre mladez</Typography>
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Box
        id="home"
        sx={{ height: '80vh', overflow: 'hidden', position: 'relative' }}
      >
        <ImageBox
          width="15%"
          left="5%"
          top="7%"
          source={mladi1}
          variants={item}
        />
        <ImageBox
          width="40%"
          left="30%"
          top="10%"
          source={pristavbaVpredu}
          variants={item}
        />
        <ImageBox
          height="25%"
          width="20%"
          left="40%"
          top="60%"
          source={mladi2}
          variants={item}
        />
        <ImageBox
          width="18%"
          left="73%"
          top="50%"
          source={mladi3}
          variants={item}
        />
        <ImageBox
          width="20%"
          left="75%"
          top="15%"
          source={pristavbaVzadu}
          variants={item}
        />
        <ImageBox
          width="15%"
          left="15%"
          top="55%"
          source={pristavbaZhora}
          variants={item}
        />
      </Box>
    </motion.div>
  </div>
);

export default Home;
