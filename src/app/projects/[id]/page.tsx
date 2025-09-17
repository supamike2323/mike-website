import { notFound } from 'next/navigation';
import projects from '@/data/projects';
import { ProjectDetailClient } from './ProjectDetailClient';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface ProjectDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const resolvedParams = await params;
  const project = projects.find(p => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}