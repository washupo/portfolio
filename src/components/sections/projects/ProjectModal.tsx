//ProjectModal.tsx
export interface Project {
    id: number;
    title: string;
    backgroundImage: string;
    url: string;
    description: string | React.ReactNode;
    technos: string;
    banner: string;
    img1: string;
    img2: string;
    img3: string;
    
}

interface ProjectModalProps {
    onClick: () => void;
    project: Project;
}

export function ProjectModal({ onClick, project }: ProjectModalProps) {
    return (
        <section className="fixed inset-0 h-screen bg-slate-500 bg-opacity-90 z-50 overflow-y-scroll">
                <div 
                className="relative top-[15vh] bg-white p-4 grid grid-cols-1 cursor-default"
                >
                    <div
                        className="bg-cover bg-center rounded-lg h-48 sm:h-[70vh] flex items-center"
                        style={{ backgroundImage: `url(${project.banner})` }}
                    >
                        <a
                            className=" text-orange-300 font-Bangers p-5 uppercase text-4xl  before:inline-block before:w-2 before:h-5 before:bg-white before:rounded-sm before:mr-4 "
                            href={project.url}
                            target="_blank"
                        >
                            See live
                        </a>

                    </div>

                    <div className=" border-b border-b-slate-200 sm:border-0 pt-5 pb-10 grid grid-cols-1 sm:grid-cols-2">
                        <h2 className="font-Bangers text-6xl sm:text-7xl pb-5 sm:border-b sm:border-b-gray-400 sm:pb-10 sm:mx-3">{project.title}</h2>
                        <p className="text-xl sm:border-b sm:border-b-gray-400 sm:pb-10 sm:mx-3 sm:pl-10">
                            {project.description}
                        </p>
                    </div>

                    <div className="pt-5 sm:pt-0">
                        <h3 className=" text-slate-400">Technologies</h3>
                        <p className="flex flex-wrap">
                            {project.technos}
                        </p>
                    </div>

                    <article className="grid grid-cols-1 sm:grid-cols-6 space-y-5 py-10">
                        <img className="rounded-lg h-auto sm:h-96 w-full object-cover sm:col-start-3 sm:col-span-4" src={`${project.img1}`} alt="" />
                        <img className="rounded-lg h-auto sm:h-96 object-cover sm:col-span-3" src={`${project.img2}`} alt="" />
                        <img className="rounded-lg h-auto sm:h-96 object-cover w-full sm:col-start-3 sm:col-span-4" src={`${project.img3}`} alt="" />
                    </article>

                    <button
                        className=" bg-orange-300 uppercase font-bold fixed py-1 px-4 rounded-lg bottom-3 z-50 place-self-center"
                        onClick={onClick}
                    >
                        Close
                    </button>
                </div>
        </section>
    )
}