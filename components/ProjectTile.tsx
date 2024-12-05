const ProjectTile = ({ project }) => {
    return (
      <div className="card bg-gray-900 shadow-md p-1 rounded-md">
        <a href={`/projects/${project.id}`}>
          <div className="card-body">
            <h2 className="card-title">{project.name}</h2>
            <p>{project.description}</p>
          </div>
        </a>
      </div>
    );
}

export default ProjectTile;
