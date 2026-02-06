'use client';

import Link from 'next/link';

export function SimpleHome() {
    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-blue-100">
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                {/* Header */}
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                        Jiaming (Mike) Deng
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 font-light mb-8">
                        Data Engineering Intern @ Cisco | Systems Engineering MS Student @ UPenn
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                        <a href="mailto:miked232@seas.upenn.edu" className="hover:text-blue-600 transition-colors">
                            miked232@seas.upenn.edu
                        </a>
                        <span>•</span>
                        <a href="tel:+14253625513" className="hover:text-blue-600 transition-colors">
                            +1 (425) 362-5513
                        </a>
                        <span>•</span>
                        <a href="https://linkedin.com/in/jiaming-deng-mike" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                            LinkedIn
                        </a>
                        <span>•</span>
                        <a href="https://mike-website-e3558.web.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                            Portfolio
                        </a>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-6">Summary</h2>
                    <p className="text-lg leading-relaxed text-neutral-700 max-w-3xl">
                        Pursuing a Master of Science in Systems Engineering at UPenn and a Bachelor of Science in Informatics (Data Science)
                        at UW. Experienced in building multi-agent AI orchestration systems, optimizing SQL workflows, and developing
                        scalable backend architectures. Skilled in PyTorch, LangGraph, AWS, and Data Engineering.
                    </p>
                </section>

                {/* Experience Highlights */}
                <section className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-6">Experience Highlights</h2>

                    <div className="space-y-8">
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl font-semibold text-neutral-900">Data Engineering Intern</h3>
                                <span className="text-neutral-500 font-medium">June 2025 – August 2025</span>
                            </div>
                            <div className="text-blue-600 font-medium mb-3">Cisco Systems</div>
                            <p className="text-neutral-700 leading-relaxed max-w-3xl">
                                Built a multi-agent AI orchestration system (LangGraph + ReAct) that cut SQL workflow runtime by 80%.
                                Reduced query latency from 20s to 3s by engineering a Pandas + DuckDB caching layer.
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl font-semibold text-neutral-900">Research Assistant – Backend Development</h3>
                                <span className="text-neutral-500 font-medium">February 2025 - June 2025</span>
                            </div>
                            <div className="text-blue-600 font-medium mb-3">University of Washington - Paul G. Allen School</div>
                            <p className="text-neutral-700 leading-relaxed max-w-3xl">
                                Delivered an AIOps backend for investigating AI voice bias. Developed 20+ RESTful APIs in Django
                                and optimized PostgreSQL queries on AWS RDS.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Education Highlight */}
                <section className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-6">Education</h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-lg font-semibold">University of Pennsylvania</h3>
                                <span className="text-neutral-500 text-sm">Aug 2025 - Dec 2026</span>
                            </div>
                            <p className="text-neutral-600">Master of Science in Engineering, Systems Engineering</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-lg font-semibold">University of Washington</h3>
                                <span className="text-neutral-500 text-sm">Aug 2021 - Aug 2025</span>
                            </div>
                            <p className="text-neutral-600">Bachelor of Science in Informatics (Data Science Track)</p>
                            <p className="text-neutral-600">Bachelor of Art in Psychology</p>
                        </div>
                    </div>
                </section>

                {/* Actions */}
                <section className="flex gap-4">
                    <Link
                        href="/resume"
                        className="px-6 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all hover:shadow-lg"
                    >
                        View Full Resume
                    </Link>
                    <Link
                        href="/projects"
                        className="px-6 py-3 border border-neutral-200 text-neutral-900 rounded-lg font-medium hover:border-neutral-400 transition-all"
                    >
                        View Projects
                    </Link>
                </section>
            </div>
        </div>
    );
}
