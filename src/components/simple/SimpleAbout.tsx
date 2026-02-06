'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SimpleAboutProps {
    markdown: string;
    loading: boolean;
}

export function SimpleAbout({ markdown, loading }: SimpleAboutProps) {
    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans pt-16 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-600 transition-colors font-medium">
                        <FontAwesomeIcon icon={faArrowLeft as any} className="w-4 h-4" />
                        Home
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-12 border-b border-neutral-200 pb-4">About Me</h1>

                    <div className="prose prose-lg prose-neutral max-w-none">
                        {loading ? (
                            <div className="flex items-center justify-center py-16">
                                <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                            </div>
                        ) : (
                            <Markdown
                                options={{
                                    overrides: {
                                        h1: {
                                            props: {
                                                className: 'text-2xl font-bold text-neutral-900 mb-6 mt-8',
                                            },
                                        },
                                        h2: {
                                            props: {
                                                className: 'text-xl font-bold text-neutral-800 mb-4 mt-8',
                                            },
                                        },
                                        h3: {
                                            props: {
                                                className: 'text-lg font-bold text-neutral-800 mb-3 mt-6',
                                            },
                                        },
                                        p: {
                                            props: {
                                                className: 'text-neutral-700 leading-relaxed mb-4 text-lg',
                                            },
                                        },
                                        a: {
                                            props: {
                                                className: 'text-blue-600 hover:text-blue-800 hover:underline transition-colors',
                                            },
                                        },
                                        ul: {
                                            props: {
                                                className: 'list-disc pl-5 mb-4 space-y-2 text-neutral-700',
                                            },
                                        },
                                        li: {
                                            props: {
                                                className: 'pl-1',
                                            },
                                        },
                                        strong: {
                                            props: {
                                                className: 'font-semibold text-neutral-900',
                                            },
                                        },
                                    },
                                }}
                            >
                                {markdown}
                            </Markdown>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
