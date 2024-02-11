//UtilsGSAP.ts
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Gestion ScrollTo pour déplacer le défilement vers une section spécifique
export const useScrollTo = ((index: number) => {
    gsap.to('.main', {
        duration: 1,
        scrollTo: {
            y: ".section" + (index + 1),
        },
    });
})

// Gestion des effets de défilement - Logique d'effets de défilement avec gsap et ScrollTrigger
export const useScrollTrigger = (() => {
    useEffect(() => {
        // slide
        ScrollTrigger.create({
            scroller: 'main',
            trigger: '.slide',
            start: "top 50%",
            end: "bottom 20%",
            onEnter: () => {
                gsap.fromTo(
                    '.slide',
                    { xPercent: -100, autoAlpha: 0 },
                    { xPercent: 0, autoAlpha: 1 }
                )
            },
            onLeave: () => {
                gsap.fromTo(
                    '.slide',
                    { xPercent: 0, autoAlpha: 1 },
                    { xPercent: 100, autoAlpha: 0 }
                )
            },
            onEnterBack: () => {
                gsap.fromTo(
                    '.slide',
                    { xPercent: 100, autoAlpha: 0 },
                    { xPercent: 0, autoAlpha: 1, duration: 1}
                )
            },
            onLeaveBack: () => {
                gsap.fromTo(
                    '.slide',
                    { xPercent: 0, autoAlpha: 1 },
                    { xPercent: -100, autoAlpha: 0 }
                )
            }
        })

        // line animation
        gsap.utils.toArray('.line').forEach((el) => {
            const element = el as HTMLElement;
            ScrollTrigger.create({
                scroller: '.main',
                trigger: element,
                start: "top bottom",
                end: "bottom 5%",
                onEnter: () => {
                    gsap.fromTo(
                        element,
                        { scaleX: 0, transformOrigin: "left center", ease: 'none' },
                        { scaleX: 1, duration: 1.5,  overwrite: "auto" }
                    )
                },
                onEnterBack: () => {
                    gsap.fromTo(
                        element,
                        { scaleX: 0, transformOrigin: "left center", ease: 'none' },
                        { scaleX: 1, overwrite: "auto" }
                    )
                },

               
            })
        })

        // fade in
        gsap.utils.toArray('.fade').forEach((el) => {
            const element = el as HTMLElement;
            ScrollTrigger.create({
                scroller: '.main',
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                onEnter: () => {
                    gsap.fromTo(
                        element,
                        { autoAlpha: 0, scale: 0 },
                        { autoAlpha: 1, scale: 1, duration: 1, overwrite: "auto" }
                    )
                },
                onLeave: () => {
                    gsap.fromTo(
                        element,
                        { autoAlpha: 1 },
                        { autoAlpha:0 ,scale: 0, overwrite: "auto" }
                    )
                },
                onEnterBack: () => {
                    gsap.fromTo(
                        element,
                        { autoAlpha: 0},
                        { autoAlpha: 1, scale: 1, duration: 1, overwrite: "auto" }
                    )
                },
                onLeaveBack: () => {
                    gsap.fromTo(
                        element,
                        { autoAlpha: 1 },
                        { autoAlpha:0 , scale: 0, overwrite: "auto" }
                    )
                }
            })
        })

        // Appel de ScrollTrigger.refresh() à la fin pour actualiser les déclencheurs de défilement
        ScrollTrigger.refresh();
    }, [])

    return null;
});