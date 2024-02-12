// HeroSection component
import { Logo } from "../../common/Logo";
import bubble3 from '../../../assets/buttons/bubble3.svg'
import { ImageButton } from "./ImageButton";
import { sections } from "../../data/Data";

export interface HeroSectionProps {
  handleScroll: (index: number) => void;
}

export default function HeroSection({ handleScroll }: HeroSectionProps) {

  return (
    <section className="section1 h-screen flex justify-center items-center relative snap-start">
      <article
        className={`w-[95%] h-[95%] rounded-xl shadow-lg bg-halftone-pattern bg-cover flex justify-center`}>
          <div className="h-full w-3/4 lg:w-4/6 flex justify-center items-center flex-col">
          <div className='relative h-full w-full '>
          <ImageButton
            labels="Contact"
            images={bubble3}
            onClick={() => handleScroll(3)}
            rotation="-rotate-12 absolute right-0 bottom-0"
            textPosition="-translate-y-2 sm:-translate-y-4"
          />
        </div>
        <hgroup className="relative h-28 flex justify-center items-end">
          <Logo size='screen' className="z-40" />
          <h2 className=" bg-slate-200 text-sm sm:text-xl font-Patrick py-1 px-3 md:px-4 rounded-sm font-bold absolute right-0 -bottom-3 md:bottom-0 border-black border-2 z-50 fade">
            Front-end developer
          </h2>
        </hgroup>
        <div className='flex w-full h-full justify-between items-start relative'>
          {sections.slice(0, 2).map((section) => (
            <ImageButton
              key={section.id}
              labels={section.label}
              images={section.image}
              onClick={() => handleScroll(section.id)}
              rotation={section.rotation}
            />
          ))}
        </div>
          </div>
       
      </article>
    </section>
  );
}
