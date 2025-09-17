'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';

const experiences = [
  {
    title: 'Machine Learning Research Intern',
    company: 'Cisco Systems',
    location: 'RTP, North Carolina',
    period: 'Summer 2025',
    description: 'Built an LLM-powered data analysis assistant featuring structured agent orchestration, SQL tool integration, memory state tracking, and dynamic user interactions for business analytics.',
    technologies: ['Python', 'LangGraph', 'LLM', 'SQL', 'Data Analysis'],
  },
  {
    title: 'Research Assistant',
    company: 'University of Washington Allen School',
    location: 'Seattle, WA',
    period: '2024-2025',
    description: 'Developed PostgreSQL database on AWS RDS and fine-tuned WhisperTiny model for accented speech transcription using PyTorch, with RESTful APIs in Django.',
    technologies: ['PostgreSQL', 'Django', 'PyTorch', 'AWS', 'Machine Learning'],
  },
  {
    title: 'Data Science Intern',
    company: 'Mobalytics',
    location: 'Marina Del Rey, CA',
    period: '2021',
    description: 'Applied K-means clustering and conducted A/B testing on 100M users to analyze gaming behaviors, improving advertisement ROI by 10% through targeted recommendations.',
    technologies: ['K-means', 'A/B Testing', 'Machine Learning', 'Analytics'],
  },
];

const education = [
  {
    degree: 'Master of Science in Systems Engineering',
    school: 'University of Pennsylvania',
    location: 'Philadelphia, PA',
    period: '2025-2026',
    gpa: 'unknown yet',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Washington',
    location: 'Seattle, WA',
    period: '2021-2025',
    gpa: '3.75/4.0',
  },
];

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript/TypeScript', 'R', 'SQL', 'Java', 'C++'],
  },
  {
    category: 'Machine Learning & AI',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'LangGraph', 'Computer Vision', 'NLP'],
  },
  {
    category: 'Web Development',
    items: ['React', 'Next.js', 'Node.js', 'Django', 'Express.js', 'RESTful APIs'],
  },
  {
    category: 'Cloud & Databases',
    items: ['AWS', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Data Science',
    items: ['Pandas', 'NumPy', 'R Shiny', 'Plotly', 'A/B Testing', 'Statistical Analysis'],
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-36 right-12 w-80 h-42 bg-[rgba(11,44,52,0.85)] border-[3px] border-[var(--chip-border)] shadow-[8px_8px_0_rgba(2,17,20,0.7)] rotate-[7deg]" />
        <div className="absolute bottom-36 left-10 w-72 h-40 bg-[rgba(11,44,52,0.82)] border-[3px] border-[var(--chip-border)] shadow-[8px_8px_0_rgba(2,17,20,0.7)] rotate-[-6deg]" />
      </div>

      <main className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text pixel-text mb-6">
              Resume
            </h1>
            <p className="text-xl text-[var(--foreground-soft)] max-w-3xl mx-auto">
              A season-by-season look at my work, studies, and favorite tools.
            </p>
          </motion.header>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Experience */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold gradient-text pixel-text mb-8">Experience</h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="pixel-card rounded-2xl p-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-[var(--foreground)]">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-[var(--foreground-soft)] font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <p className="text-[var(--foreground-muted)] pixel-text">{exp.period}</p>
                          <p className="text-sm text-[var(--foreground-muted)]">{exp.location}</p>
                        </div>
                      </div>
                      <p className="text-[var(--foreground-soft)] mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="stardew-chip"
                        >
                          {tech}
                        </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Education */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold gradient-text pixel-text mb-8">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="pixel-card rounded-2xl p-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-[var(--foreground)] mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-[var(--foreground-soft)] font-medium">
                            {edu.school}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <p className="text-[var(--foreground-muted)] pixel-text">{edu.period}</p>
                          <p className="text-sm text-[var(--foreground-muted)]">{edu.location}</p>
                          <p className="text-sm font-medium">
                            GPA: {edu.gpa === 'unknown yet' ? (
                              <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-[#f7d891] via-[#f5c973] to-[#d99a4d] bg-clip-text text-transparent animate-pulse">
                                  {edu.gpa}
                                </span>
                                <span className="absolute -inset-1 bg-gradient-to-r from-[#f7d891]/20 via-[#f5c973]/20 to-[#d99a4d]/20 rounded blur animate-pulse"></span>
                              </span>
                            ) : (
                              <span className="text-[var(--foreground)]">{edu.gpa}</span>
                            )}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="pixel-card rounded-2xl p-6 sticky top-24"
              >
                <h2 className="text-2xl font-bold gradient-text pixel-text mb-6">Skills</h2>
                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <motion.div
                      key={skillGroup.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    >
                      <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3 uppercase tracking-wider pixel-text">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="stardew-chip"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="mt-8 pt-6 border-t border-[rgba(130,240,255,0.22)]"
                >
                  <motion.a
                    href="/resume.pdf"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="stardew-button w-full justify-center"
                  >
                    Download PDF
                  </motion.a>
                </motion.div>
              </motion.section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
