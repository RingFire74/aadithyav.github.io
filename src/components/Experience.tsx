'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'CCC Intelligent Solutions',
    date: 'May 2024 - Aug 2024',
    duties: [
      'Engineered reusable and scalable components for a client dashboard application using Vue.js.',
      'Implemented strict data flow restrictions through TypeScript and advanced data structures.',
      'Delivered a demo of the application, earning recognition during a company showcase.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'IBM',
    date: 'Jan 2021 - Jul 2023',
    duties: [
      'Developed 4 multi-functional web applications to streamline global supply chain operations.',
      'Delivered scalable full-stack solutions using Angular2, NodeJS, and IBM Cloud services.',
      'Automated data parsing and export processes, reducing manual effort from a week to minutes.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Work Experience</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* The vertical timeline bar */}
          <div className="absolute left-4 top-0 w-0.5 h-full bg-gray-200"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8 pl-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* The timeline dot */}
              <div className="absolute left-4 -ml-3 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>

              {/* The content card */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-md font-semibold text-blue-600 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
                <ul className="list-disc list-inside text-left text-gray-600 space-y-1">
                  {exp.duties.map((duty, i) => <li key={i}>{duty}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;