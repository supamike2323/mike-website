'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faArrowLeft, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SimpleProjectDetailProps {
    project: Project;
}

export function SimpleProjectDetail({ project }: SimpleProjectDetailProps) {
    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans pt-16 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link href="/projects" className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-600 transition-colors font-medium">
                        <FontAwesomeIcon icon={faArrowLeft as any} className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="mb-6">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wide">
                            {new Date(project.date).getFullYear()}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-500 mb-8 font-medium">
                        {project.subtitle}
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
                            >
                                <FontAwesomeIcon icon={faExternalLinkAlt as any} className="w-4 h-4" />
                                Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md"
                            >
                                <FontAwesomeIcon icon={faGithub as any} className="w-4 h-4" />
                                View Code
                            </a>
                        )}
                        {project.publication && (
                            <a
                                href={project.publication.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-200 text-neutral-700 bg-white rounded-lg font-medium hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-sm"
                            >
                                <FontAwesomeIcon icon={faBook as any} className="w-4 h-4" />
                                Read Publication
                            </a>
                        )}
                    </div>

                    {/* Main Image */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-12 bg-neutral-100 border border-neutral-200">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Description */}
                    <div className="prose prose-lg prose-neutral max-w-none mb-12">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Overview</h3>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            {project.desc}
                        </p>
                        {project.details?.overview && (
                            <p className="text-neutral-600 leading-relaxed text-lg mt-4">
                                {project.details.overview}
                            </p>
                        )}
                    </div>

                    {/* Technologies */}
                    <div className="mb-12">
                        <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.map(tech => (
                                <span key={tech} className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-md text-sm font-medium border border-neutral-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Publication Details */}
                    {project.publication && (
                        <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200 mb-12">
                            <h3 className="text-lg font-bold text-neutral-900 mb-4">Publication Details</h3>
                            <div className="space-y-2">
                                <p className="font-medium text-neutral-900">{project.publication.title}</p>
                                <p className="text-neutral-600">{project.publication.authors}</p>
                                <p className="text-neutral-500 text-sm italic">{project.publication.venue}</p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
