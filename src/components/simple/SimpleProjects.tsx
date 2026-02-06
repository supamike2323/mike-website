'use client';

import Link from 'next/link';
import projects from '@/data/projects';
import { motion } from 'framer-motion';

export function SimpleProjects() {
    const sortedProjects = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans pt-16 pb-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 text-sm font-medium text-neutral-500 mb-4">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-neutral-900">Projects</span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-4">Projects</h1>
                    <p className="text-xl text-neutral-600 max-w-2xl">
                        A collection of my work in Data Engineering, AI/ML, and Full Stack Development.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group flex flex-col h-full"
                        >
                            <Link href={`/projects/${project.id}`} className="block flex-1 flex flex-col">
                                <div className="p-6 flex flex-col h-full">
                                    <div className="mb-4">
                                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wide">
                                            {new Date(project.date).getFullYear()}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-neutral-500 mb-4 font-medium">
                                        {project.subtitle}
                                    </p>

                                    <p className="text-neutral-600 mb-6 line-clamp-3 flex-grow">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.technologies?.slice(0, 4).map(tech => (
                                            <span key={tech} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies && project.technologies.length > 4 && (
                                            <span className="text-xs text-neutral-400 px-1 py-1">+{project.technologies.length - 4}</span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
