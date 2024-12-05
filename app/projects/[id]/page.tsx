"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Project from "@/app/types";

const ProjectPage = () => {
  const params = useParams();

  const [project, setProject] = useState<Project|null>(null);

  useEffect(() => {
    const { id } = params;

    const fetchProject = async () => {
      const project = await fetch(`/api/projects/${id}`).then((res) => res.json());
      setProject(project);
    };

    fetchProject();
  }, [params]);

  if (!project) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-2xl font-bold">
        {project.name}
        <span className=" text-neutral-500">{project.id}</span>
      </h1>
      <p>{project.createdAt.toString()}</p>
      <p>{project.description}</p>
      <DangerZone projectId={project.id} />
    </div>
  );
};


const DangerZone = ({ projectId }: { projectId: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    // send req to delete project
    const res = await fetch(`/api/projects`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: projectId }),
    });

    if (!res.ok) {
      // handle error
      console.log("error deleting project");
    }

    // redirect to projects page
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-8">
      <h2 className="">Danger Zone</h2>
      <div className="flex flex-col gap-4">
        <span className="text-warning">
          Warning: This action cannot be undone. This will permanently delete the project
          and all of its data.
        </span>
        <button className="btn btn-error btn-outline" onClick={handleDelete}>
          Delete Project
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
