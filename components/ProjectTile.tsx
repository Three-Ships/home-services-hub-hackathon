const ProjectTile = ({ project }) => {
    return (
      <div className="card bg-gray-900 shadow-md p-4 rounded-md">
        <div className="card-body">
          <h2 className="card-title">{project.name}</h2>
          <p>{project.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
}

export default ProjectTile;
