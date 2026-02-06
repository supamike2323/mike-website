'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// import { faEnvelope, faLocationDot, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const contactMethods = [
    {
        // icon: faEnvelope,
        label: 'Email',
        value: 'mikedeng@uw.edu',
        href: 'mailto:mikedeng@uw.edu',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        // icon: faLinkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/mikedeng',
        href: 'https://www.linkedin.com/in/mikedeng/',
        color: 'text-blue-700',
        bgColor: 'bg-blue-50',
    },
    {
        // icon: faGithub,
        label: 'GitHub',
        value: 'github.com/supamike2323',
        href: 'https://github.com/supamike2323',
        color: 'text-neutral-900',
        bgColor: 'bg-neutral-100',
    },
    {
        // icon: faLocationDot,
        label: 'Location',
        value: 'Seattle, WA',
        href: null,
        color: 'text-red-500',
        bgColor: 'bg-red-50',
    },
];

export function SimpleContact() {
    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans pt-16 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-600 transition-colors font-medium">
                        {/* <FontAwesomeIcon icon={faArrowLeft as any} className="w-4 h-4" /> */}
                        Home
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-6">Get in Touch</h1>
                    <p className="text-xl text-neutral-600 mb-12 max-w-2xl">
                        I'm always open to discussing new opportunities, collaborations, or just connecting.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="bg-white border border-neutral-200 p-6 rounded-xl hover:shadow-md transition-shadow group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${method.bgColor} ${method.color} text-xl group-hover:scale-110 transition-transform`}>
                                        {/* <FontAwesomeIcon icon={method.icon as any} /> */}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-neutral-900 mb-1">{method.label}</h3>
                                        {method.href ? (
                                            <a
                                                href={method.href}
                                                target={method.href.startsWith('http') ? '_blank' : undefined}
                                                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="text-neutral-600 hover:text-blue-600 transition-colors font-medium"
                                            >
                                                {method.value}
                                            </a>
                                        ) : (
                                            <p className="text-neutral-600 font-medium">{method.value}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
