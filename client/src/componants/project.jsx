import projects from './projectsList.json'
export default function Project() {
    const handlePreviewClick = (url) => {
        window.open(url, '_blank');
      };
    return (
        <div id="projects" className="w-full h-full flex flex-col relative items-center">
            <p className="md:text-md text-sm text-purple-500 font-bold mb-4">PROJECTS</p>
            <p className="md:text-3xl text-xl text-black-900 font-bold mb-4">Latest Work</p>
            <p className="md:text-xl text-md text-gray-500 text-balance ml-20">Here are some recent projects I’ve been working on, including my own</p>
            <p className="md:text-xl text-md text-gray-500">personal projects.</p>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10 py-16"> 
                {projects.map((project, index) => (
                    <div key={index} className="container flex flex-col md:w-[25%] h-80 w-[70%] ml-14"> 
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-52 object-cover mb-2"
                        />
                        <p className="text-xl text-black-500 font-bold mb-2">{project.title}</p>
                        <p className="text-md text-gray-500 mb-2">{project.description}</p>
                        <button
                        onClick={() => handlePreviewClick(project.link)}
                        className="text-purple-500 w-1">Preview</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
