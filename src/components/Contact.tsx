'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-24 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Get In Touch</h2>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-gray-600 mb-8">
            I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <a
            href="mailto:aadithy.v@gmail.com"
            className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Say Hello
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
