// ProjectsSection.tsx
import { useState } from "react";
import { useOpen } from "../../utils/utils";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../../data/Data";
import { Project } from "./ProjectModal";
import SectionTitle from "../../common/SectionTitle";

export interface ProjectsSectionProps {
  onClick: () => void;
}

export default function ProjectsSection({ onClick }: ProjectsSectionProps) {
  const { open, handleOpen } = useOpen();
  const [project, setProject] = useState({} as Project);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseEnter = (projectId: number) => setHovered(projectId);
  const handleMouseLeave = () => setHovered(null);

  return (
    <>
      <section className="section3 h-[90vh] p-4 pt-6 flex flex-col gap-6 justify-center scroll-mt-[10vh] snap-start overflow-hidden">
        <SectionTitle title="Portfolio" color="bg-pink-700" className="place-self-center" />
        <div className="flex flex-col md:flex-row gap-4 h-full slide">

          {projects.map((project) => (
            <article
              key={project.id}
              className={`bg-cover bg-center flex-1 rounded-lg cursor-pointer relative hover:flex-[5] transition-all ease-in-out flex overflow-hidden ${hovered ? "items-center justify-center" : ""}`}
              style={{ backgroundImage: `url(${project.backgroundImage})` }}
              onClick={() => { onClick(); handleOpen(); setProject(project) }}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}

            >
              <p 
              className={`font-Bangers py-2 px-4 absolute text-3xl bg-slate-100 rounded-sm border-black border-2 ${hovered === project.id ? "z-50 text-7xl p-6" : " bottom-2 left-2"}`}
              >
                {project.title}
              </p>
              {hovered &&(
                <span className="h-full w-full bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 absolute">

                </span>
              )
              }
            </article>
          ))}

        </div>
      </section>
      {open && <ProjectModal onClick={() => { onClick(); handleOpen(); }} project={project} />}
    </>
  );
}