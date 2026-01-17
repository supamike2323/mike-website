'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Starfield } from '@/components/Starfield';

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
    gpa: '???',
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
    category: 'Languages',
    items: ['Python', 'JavaScript/TypeScript', 'R', 'SQL', 'Java', 'C++'],
    level: 95,
  },
  {
    category: 'ML & AI',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'LangGraph', 'CV', 'NLP'],
    level: 85,
  },
  {
    category: 'Web Dev',
    items: ['React', 'Next.js', 'Node.js', 'Django', 'Express.js'],
    level: 90,
  },
  {
    category: 'Cloud',
    items: ['AWS', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    level: 80,
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen">
      <Starfield />
      <Navigation />

      <main className="relative pt-24 pb-16 px-4">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '24px' }}
            >
              STATS
            </h1>
            <p
              className="text-xl text-[var(--ut-yellow)]"
              style={{ fontFamily: 'VT323, monospace' }}
            >
              * You examined your equipment and abilities.
            </p>
          </motion.header>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experience */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2
                  className="text-xl font-bold text-[var(--ut-yellow)] mb-6"
                  style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
                >
                  EXPERIENCE
                </h2>

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="undertale-box p-6 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3
                            className="text-lg font-semibold text-white mb-1"
                            style={{ fontFamily: 'VT323, monospace', fontSize: '22px' }}
                          >
                            {exp.title}
                          </h3>
                          <p
                            className="text-[var(--ut-yellow)]"
                            style={{ fontFamily: 'VT323, monospace' }}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <p
                            className="text-white/70"
                            style={{ fontFamily: 'VT323, monospace' }}
                          >
                            {exp.period}
                          </p>
                          <p
                            className="text-white/50 text-sm"
                            style={{ fontFamily: 'VT323, monospace' }}
                          >
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <p
                        className="text-white/80 mb-4 leading-relaxed"
                        style={{ fontFamily: 'VT323, monospace', fontSize: '18px' }}
                      >
                        <span className="text-[var(--ut-yellow)]">* </span>
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 border border-white/40 text-white/80 text-xs"
                            style={{ fontFamily: 'VT323, monospace' }}
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
                <h2
                  className="text-xl font-bold text-[var(--ut-yellow)] mb-6"
                  style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
                >
                  EDUCATION
                </h2>

                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="undertale-box p-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3
                            className="text-lg font-semibold text-white mb-1"
                            style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}
                          >
                            {edu.degree}
                          </h3>
                          <p
                            className="text-[var(--ut-yellow)]"
                            style={{ fontFamily: 'VT323, monospace' }}
                          >
                            {edu.school}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <p
                            className="text-white/70"
                            style={{ fontFamily: 'VT323, monospace' }}
                          >
                            {edu.period}
                          </p>
                          <p
                            className="text-white/50"
                            style={{ fontFamily: 'VT323, monospace' }}
                          >
                            {edu.location}
                          </p>
                          <p
                            className={`mt-1 ${edu.gpa === '???' ? 'text-[var(--ut-yellow)] animate-pulse' : 'text-white'}`}
                            style={{ fontFamily: 'VT323, monospace' }}
                          >
                            GPA: {edu.gpa}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar - Skills */}
            <div className="lg:col-span-1">
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="undertale-box p-6 sticky top-24"
              >
                <h2
                  className="text-lg font-bold text-[var(--ut-yellow)] mb-6"
                  style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '12px' }}
                >
                  EQUIPPED SKILLS
                </h2>

                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <motion.div
                      key={skillGroup.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    >
                      {/* Skill category with level bar */}
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className="text-white text-sm"
                          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px' }}
                        >
                          {skillGroup.category}
                        </h3>
                        <span
                          className="text-white/50 text-xs"
                          style={{ fontFamily: 'VT323, monospace' }}
                        >
                          LV {skillGroup.level}
                        </span>
                      </div>

                      {/* Stat bar */}
                      <div className="h-3 border border-white/50 mb-3">
                        <motion.div
                          className="h-full bg-[var(--ut-yellow)]"
                          initial={{ width: 0 }}
                          animate={{ width: `${skillGroup.level}%` }}
                          transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                        />
                      </div>

                      {/* Skill items */}
                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 border border-white/30 text-white/70 text-xs"
                            style={{ fontFamily: 'VT323, monospace' }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Download Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="mt-8 pt-6 border-t border-white/20"
                >
                  <motion.a
                    href="/resume.pdf"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-[var(--ut-yellow)] text-[var(--ut-yellow)] hover:bg-[var(--ut-yellow)] hover:text-black transition-all"
                    style={{ fontFamily: 'VT323, monospace', fontSize: '18px' }}
                  >
                    <span>❤</span>
                    DOWNLOAD PDF
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
