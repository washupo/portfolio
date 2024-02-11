// MainPage.tsx
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import ProjectsSection from "./sections/projects/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Navbar from "./common/Nav/Navbar";
import { useOpen } from "./utils/utils";
import { useScrollTo, useScrollTrigger } from "./utils/UtilsGSAP";

export function MainPage() {
    const { open, handleOpen } = useOpen();

    useScrollTrigger();

    return (
        <main className={`main p-0 m-0 w-screen h-screen ${open ? 'overflow-hidden' : 'overflow-y-scroll'} snap-y snap-mandatory`}>
            <HeroSection />
            <Navbar handleScroll={useScrollTo} />
            <AboutSection />
            <ProjectsSection onClick={handleOpen}  />
            <ContactSection />
        </main>
    );
}



