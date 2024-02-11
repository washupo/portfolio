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

  return (
    <>
    <section className="section3 h-[90vh] p-4 flex flex-col gap-4 justify-center scroll-mt-[10vh] snap-start overflow-auto">
      <SectionTitle title="Projets" color="bg-pink-700" className="place-self-center" />
      <div className="flex flex-col md:items-center md:justify-center md:flex-wrap gap-x-0 gap-4 h-full slide">

        {projects.map((project) => (
          <article
          key={project.id}
          className={`bg-[url('${project.backgroundImage}')] bg-cover bg-center flex-1 md:flex-none md:h-[47.5%] md:w-[47.5%] rounded-lg cursor-pointer relative`}
          onClick={() => { onClick(); handleOpen(); setProject(project) }}
        >
          <p className="font-Bangers text-white p-4 absolute bottom-0 text-3xl">
            {project.title}
            </p>
        </article>
        ))}

      </div>
    </section>
    {open && <ProjectModal onClick={() => { onClick(); handleOpen(); }} project={project} />}
    </>
  );
}