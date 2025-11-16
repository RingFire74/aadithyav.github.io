'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Graph-Based Retrieval-Augmented Generation',
    description: 'Replicated GraphRAG and LightRAG pipelines, optimizing retrieval accuracy and efficiency, reducing token usage by 15% and API overhead by 70%.',
    short_description: 'A project focused on optimizing Retrieval-Augmented Generation systems using graph-based methods.',
    url: 'https://github.com/RingFire74/GraphAugment',
    tags: ['Python', 'GraphRAG', 'LightRAG', 'RAG']
  },
  {
    title: 'Pacman AI Projects',
    description: 'This project, part of my AI coursework, involved implementing various search and adversarial algorithms to guide Pacman through mazes. It was designed to teach fundamental AI concepts such as search algorithms (BFS, DFS, A* Search), decision-making in adversarial environments (Minimax, Alpha-Beta Pruning), and Reinforcement Learning (Q-learning).',
    short_description: 'An AI course project implementing various search and reinforcement learning algorithms for Pacman.',
    url: 'https://github.com/RingFire74/Pacman-AI-projects',
    tags: ['Python', 'AI', 'Search Algorithms', 'Reinforcement Learning']
  },
  {
    title: 'Predicting Appliances Energy Consumption',
    description: 'This project focuses on predicting appliances\' energy consumption in a low-energy building based on environmental, temporal, and weather variables. Machine learning models were developed to predict and classify energy consumption levels using a dataset collected from ZigBee sensors and weather stations.',
    short_description: 'A project on predicting appliance energy usage with machine learning.',
    url: 'https://github.com/RingFire74/Predicting-Appliances-Energy-Consumption',
    tags: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Scikit-learn']
  },
  {
    title: 'Comparative Study: MobilNet vs. YOLOv3 Face-Mask Detector',
    description: 'During the Covid-19 pandemic, face masks became a crucial part of infection protection. This project automates the process of detecting face masks by comparing two popular object detection architectures, YOLOv3 and MobileNetv2, to evaluate their performance and accuracy in different scenarios.',
    short_description: 'A conference paper comparing two popular object detection architectures for face-mask detection.',
    url: 'https://link.springer.com/chapter/10.1007/978-981-16-6605-6_61',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'YOLOv3', 'MobileNet']
  },
  {
    title: 'Multi-Objective Bayesian Optimization on Robot\'s Speed and Energy',
    description: 'Trained two simulated robots (humanoid and spider) using Reinforcement Learning and genetic algorithms in the MuJoCo OpenAI Gym. The project focused on optimizing for both speed and energy efficiency across different terrains.',
    short_description: 'A project focused on optimizing the speed and energy efficiency of simulated robots.',
    tags: ['Python', 'Reinforcement Learning', 'Genetic Algorithms', 'MuJoCo', 'OpenAI Gym']
  },
  {
  title: "Serendip: Topic Model-Driven Visual Exploration of Text Corpora",
  description: "Led the development of a novel visualization tool for humanities scholars to analyze and discover patterns in large text corpora (1000+ documents/full-length books). The system uses **probabilistic topic models** (LDA) to structure data and facilitates a fluid, multi-scale exploration path, successfully integrating corpus-level trends with close, passage-level reading. Its core architecture promotes **serendipitous discovery** by linking three interactive views.",
  short_description: "A multi-scale visualization platform using topic modeling (LDA) to enable pattern discovery and deep textual analysis across large corpora.",
  url: "https://serendip.vercel.app/",
  tags: ["Visualization", "D3.js", "Python (Flask)", "Topic Modeling (LDA)", "Multi-Scale UI", "Data Aggregation"]
  },
  {
  title: "Real-Time Analysis of Streaming NYC Taxi Data via a Scalable Graph Pipeline Whisperer: Real-Time Graph Data Pipeline",
  description: "This project establishes an efficient and reliable framework for processing high-throughput data streams[cite: 4, 135]. [cite_start]It ingests continuous document data (NYC Taxi dataset [cite: 9][cite_start]) using Kafka [cite: 12][cite_start], orchestrates all components (Kafka, Zookeeper, Neo4j) with Kubernetes [cite: 13, 69, 181][cite_start], and streams the refined data into a Neo4j graph database[cite: 5, 136]. [cite_start]The system enables near real-time graph analysis, such as PageRank and BFS, to extract actionable insights from the interconnected data[cite: 6, 10, 63].",
  short_description: "An orchestrated data pipeline using Kubernetes [cite: 13, 179] [cite_start]and Kafka [cite: 12] [cite_start]to stream and process real-time data in a Neo4j graph database[cite: 5, 8].",
  url: "https://github.com/Fall-24-CSE511-Data-Processing-at-Scale/Project-1-avelayu2",
  tags: ["Kubernetes","Kafka","Neo4j","Docker","Python","Data Engineering","Data Streaming","Graph Database","Helm"]
}
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{project.short_description}</p>
              <div className="flex flex-wrap mt-auto">
                {project.tags.map(tag => <span key={tag} className="text-xs bg-gray-200 text-gray-800 mr-2 mb-2 px-3 py-1 rounded-full">{tag}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <div className="flex flex-wrap mb-4">
                  {selectedProject.tags.map(tag => <span key={tag} className="text-sm bg-gray-200 text-gray-800 mr-2 mb-2 px-3 py-1 rounded-full">{tag}</span>)}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.description}</p>
                {selectedProject.url && (
                  <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold inline-block">
                    View Project / Publication &rarr;
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800 transition-colors"
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
