// HeroSection component
import { Logo } from "../common/Logo";

export interface HeroSectionProps {
}

export default function HeroSection() {
  return (
    <section className="section1 h-screen flex justify-center items-center snap-start">
      <article
        className={`w-[95%] h-[95%] rounded-xl shadow-lg bg-halftone-pattern bg-cover flex justify-center items-center`}>
        <hgroup className="relative w-11/12 h-28 flex justify-center items-end">
          <Logo size='screen' className="" />
          <h2 className=" bg-slate-200 text-sm sm:text-xl font-Patrick py-1 px-3 md:px-4 rounded-sm font-bold absolute right-0 -bottom-3 md:bottom-0 border-black border-2 fade">
            Front-end developer
          </h2>
        </hgroup>
      </article>
    </section>
  );
}
