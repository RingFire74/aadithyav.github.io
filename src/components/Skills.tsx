'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python', 'JavaScript', 'TypeScript', 'C/C++', 'Java',
  'AngularJS', 'NodeJS', 'VueJS', 'ReactJS',
  'TensorFlow', 'PyTorch', 'GitHub', 'Jira', 'Docker',
  'Kubernetes', 'AWS', 'MySQL'
];

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
        <motion.div
          className="flex flex-wrap justify-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.05 }}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              className="bg-white text-gray-700 text-lg font-medium m-2 px-5 py-2 rounded-full shadow-sm border border-gray-200"
              variants={skillVariants}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
