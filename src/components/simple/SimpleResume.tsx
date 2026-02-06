'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { faDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { experiences, education, skills } from '@/data/resume';

export function SimpleResume() {
    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans pt-16 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex items-center justify-between"
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-600 transition-colors font-medium">
                        <FontAwesomeIcon icon={faArrowLeft as any} className="w-4 h-4" />
                        Home
                    </Link>

                    <a
                        href="/resume.pdf"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all text-sm"
                    >
                        <FontAwesomeIcon icon={faDownload as any} className="w-4 h-4" />
                        Download PDF
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-12 border-b border-neutral-200 pb-4">Resume</h1>

                    {/* Education */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 uppercase tracking-wide text-blue-600">Education</h2>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start group">
                                    <div>
                                        <h3 className="text-xl font-bold text-neutral-900">{edu.school}</h3>
                                        <p className="text-lg text-neutral-700 font-medium">{edu.degree}</p>
                                    </div>
                                    <div className="text-left md:text-right mt-1 md:mt-0">
                                        <p className="text-neutral-500 font-medium">{edu.period}</p>
                                        <p className="text-neutral-500 text-sm">{edu.location}</p>
                                        {edu.gpa !== '???' && <p className="text-neutral-600 font-medium mt-1">GPA: {edu.gpa}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 uppercase tracking-wide text-blue-600">Experience</h2>
                        <div className="space-y-10">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-0 md:pl-0">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-neutral-900">{exp.title}</h3>
                                            <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                                        </div>
                                        <div className="text-left md:text-right mt-1 md:mt-0">
                                            <p className="text-neutral-500 font-medium">{exp.period}</p>
                                            <p className="text-neutral-500 text-sm">{exp.location}</p>
                                        </div>
                                    </div>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map(tech => (
                                            <span key={tech} className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded font-medium border border-neutral-200">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 uppercase tracking-wide text-blue-600">Skills</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {skills.map((skillGroup, index) => (
                                <div key={index} className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                                    <h3 className="text-lg font-bold text-neutral-900 mb-3">{skillGroup.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-white text-neutral-700 text-sm rounded shadow-sm border border-neutral-200">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </motion.div>
            </div>
        </div>
    );
}
