'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Globe } from 'lucide-react';
import { projects } from '@/data/portfolio';
import Button from '@/components/ui/Button';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                className="glass p-6 rounded-2xl h-full hover-lift cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {project.id === 'krishi-mitra' && '🌾'}
                    {project.id === 'sahkarya' && '🏛️'}
                    {project.id === 'stock-prediction' && '📈'}
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center space-x-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project.id)}
                      className="flex items-center space-x-2"
                    >
                      <Code className="w-4 h-4" />
                      <span>Details</span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold gradient-text">
                          {project.title}
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                          ✕
                        </Button>
                      </div>

                      {/* Project Image */}
                      <div className="w-full h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                        <div className="text-8xl opacity-50">
                          {project.id === 'krishi-mitra' && '🌾'}
                          {project.id === 'sahkarya' && '🏛️'}
                          {project.id === 'stock-prediction' && '📈'}
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          About the Project
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {project.id === 'krishi-mitra' && (
                            <>
                              <li>• AI-powered agricultural advice using Gemini API</li>
                              <li>• Real-time weather updates and crop recommendations</li>
                              <li>• User-friendly interface for farmers</li>
                              <li>• Multi-language support</li>
                            </>
                          )}
                          {project.id === 'sahkarya' && (
                            <>
                              <li>• Citizen-government communication platform</li>
                              <li>• Real-time issue reporting and tracking</li>
                              <li>• IoT integration for smart city solutions</li>
                              <li>• Responsive design for all devices</li>
                            </>
                          )}
                          {project.id === 'stock-prediction' && (
                            <>
                              <li>• Machine learning-based price prediction</li>
                              <li>• Interactive Streamlit dashboard</li>
                              <li>• Historical data analysis</li>
                              <li>• Real-time market data integration</li>
                            </>
                          )}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4">
                        {project.githubUrl && (
                          <Button
                            href={project.githubUrl}
                            target="_blank"
                            className="flex items-center space-x-2"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Code</span>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            variant="outline"
                            href={project.liveUrl}
                            target="_blank"
                            className="flex items-center space-x-2"
                          >
                            <Globe className="w-4 h-4" />
                            <span>Live Demo</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 