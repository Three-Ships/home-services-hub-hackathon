'use client'
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import ProjectTile from '@/components/ProjectTile';

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
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-3xl">Welcome to your projects</h1>
        {projects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </main>
    </div>
  );
}

export default Home;
