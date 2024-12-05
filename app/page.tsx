'use client'
import { useEffect, useState } from 'react';
import ProjectTile from '@/components/ProjectTile';
import ButtonFloat from '@/components/ButtonFloat';
import Project from '@/app/types';

const TEST_PROJECT_TOM = {
  id: 'tom',
  name: 'New Gutter Filters',
  description: 'Add gutter filters on my house',
  category: 'Gutters',
  createdAt: new Date(),
} as Project

const TEST_PROJECT_MULTI = {
  id: 'multi',
  name: 'Replace Old Gutters',
  description: 'Replace a broken section of gutters',
  category: 'Gutters',
  createdAt: new Date(),
} as Project

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 sm:items-start">
        <h1 className="text-2xl">Your projects:</h1>
        {projects.map((project: Project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
        <ProjectTile project={TEST_PROJECT_TOM} />
        <ProjectTile project={TEST_PROJECT_MULTI} />
        <ButtonFloat />
      </main>
    </div>
  );
}

export default Home;
