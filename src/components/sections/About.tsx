'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const About: React.FC = () => {
  const educationItems = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: personalInfo.education.degree,
      subtitle: personalInfo.education.institution,
      duration: personalInfo.education.duration,
      details: `CGPA: ${personalInfo.education.cgpa}`,
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: '12th Standard',
      subtitle: personalInfo.education.twelfth.institution,
      duration: personalInfo.education.twelfth.duration,
      details: `Percentage: ${personalInfo.education.twelfth.percentage}`,
    },
  ];

  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Communication',
      description: 'Strong interpersonal and communication skills',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Analytical thinking and creative problem-solving approach',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Who I Am
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.about}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-primary mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Education
              </h3>
              <div className="space-y-6">
                {educationItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline connector */}
                    {index < educationItems.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent" />
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground font-medium">
                          {item.subtitle}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.duration}
                        </p>
                        <p className="text-sm text-primary font-medium mt-1">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Skills Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Key Focus Areas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-3xl mb-2">🧠</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">AI & ML</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Machine Learning & AI Solutions</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-3xl mb-2">💻</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Full-Stack</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Web Development</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-3xl mb-2">🔧</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Problem Solving</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Analytical Thinking</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Innovation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Creative Solutions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 