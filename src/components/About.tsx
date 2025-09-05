'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">About Me</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
          I am a results-oriented Software Developer with a Master's degree in Computer Science from Arizona State University and a proven track record of delivering scalable full-stack solutions. With hands-on experience at companies like IBM and CCC Intelligent Solutions, I have honed my skills in frontend technologies like Angular and Vue.js, as well as backend development with Node.js. My passion lies at the intersection of software engineering and artificial intelligence, demonstrated through my diverse projects in areas like Retrieval-Augmented Generation (RAG), Reinforcement Learning, and Computer Vision. I am always eager to tackle new challenges and build innovative products.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
