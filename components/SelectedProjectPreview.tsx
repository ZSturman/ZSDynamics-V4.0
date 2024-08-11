type SelectedProjectPreviewProps = {
  selectedProject: PortfolioItem;
};

const SelectedProjectPreview = ({
    selectedProject,
  }: SelectedProjectPreviewProps) => {
    return (
      <div className="w-full h-full p-6 bg-white shadow-lg rounded-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {selectedProject.title}
          </h2>
          <p className="text-gray-600 mb-4">{selectedProject.description}</p>
          <div className="flex space-x-4 mb-4">
            {selectedProject.liveDemoUrl && (
              <a
                href={selectedProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow"
              >
                Live Demo
              </a>
            )}
            {selectedProject.sourceCodeUrl && (
              <a
                href={selectedProject.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded shadow"
              >
                Source Code
              </a>
            )}
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded shadow"
            >
              View Full Project
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedProject.techStack.map((tech, index) => (
              <span
                key={index}
                className="text-sm font-semibold text-gray-700 bg-gray-200 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-sm">
              <strong>Completed:</strong> {selectedProject.dateCompleted}
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Duration:</strong> {selectedProject.duration}
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Role:</strong> {selectedProject.role}
            </p>
          </div>
        </div>
        <iframe
          src={selectedProject.url}
          className="w-full h-80 border rounded shadow"
          title={selectedProject.title}
        ></iframe>
      </div>
    );
  };
  
  export default SelectedProjectPreview;