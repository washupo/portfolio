// AboutSection component
import SectionTitle from "../../common/SectionTitle";
import SkillsLevel from "./SkillsLevel";
import Link from "./Link";
import { skills, links } from "../../data/Data";

export default function AboutSection() {
  return (
    <section className="section2 min-h-[90vh] p-8 grid gap-6 md:grid-cols-3 content-center scroll-mt-[10vh] snap-start">
      <hgroup className="md:col-span-2 flex flex-col items-center">
        <SectionTitle title="À propos" color="bg-green-700" className="-rotate-6 lg:place-self-start " />
        <h2 className="p-4 font-Bangers text-4xl sm:text-5xl md:text-7xl text-center lg:text-left fade">
          à la recherche d'une nouvelle développeuse ?
        </h2>
      </hgroup>
      <p className="p-6 border-2 border-black bg-slate-700 text-white font-Patrick text-justify md:text-lg fade">
        En quête de nouvelles opportunités, je suis prête à appliquer mes connaissances récemment acquises en développement web en les combinant à ma solide expérience professionnelle en communication. Mon objectif est de relever de nouveaux défis et de contribuer activement à la croissance de projets innovants de manière créative, afin d'apporter une valeur significative à votre équipe.
      </p>

      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 px-8 fade">
        {skills.map((skill) => (
          <SkillsLevel key={skill.label} {...skill} />
        ))}
      </div>

      <div className="flex flex-wrap gap-4 py-4 justify-center items-center md:col-span-3 pb-44 md:pb-0 fade">
        {links.map((link) => (
          <Link key={link.text} {...link} />
        ))}
        </div>
    </section>
  );
}
