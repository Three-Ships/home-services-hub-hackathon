import { readProject } from "@/app/data/data";

export default async function ProjectPage({ params }) {
    const { id } = await params;

    const project = await readProject(id);

    if (!project) {
        return <div><h1>404: Not Found</h1></div>
    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>{project.name}<span className='text-gray-300'>{project.id}</span></h1>
            <p>{project.createdAt}</p>
            <p>{project.description}</p>

        </div>
    );
}