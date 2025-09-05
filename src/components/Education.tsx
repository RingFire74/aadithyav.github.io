'use client';

import React from 'react';
import { motion } from 'framer-motion';

const education = [
    {
        school: 'Arizona State University, Tempe Campus',
        date: 'Aug 2023 - May 2025',
        degree: 'Master of Science in Computer Science',
    },
    {
        school: 'Amrita Vishwa Vidyapeetham, Coimbatore',
        date: 'Jul 2017 - Jun 2021',
        degree: 'Bachelor of Technology in Computer Science and Engineering',
    }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Education</h2>
        <div className="max-w-2xl mx-auto space-y-8">
            {education.map((edu, index) => (
                <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    <h3 className="text-xl font-bold text-gray-900">{edu.school}</h3>
                    <p className="text-md text-gray-500 mt-1">{edu.date}</p>
                    <p className="text-lg text-gray-700 mt-2">{edu.degree}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
