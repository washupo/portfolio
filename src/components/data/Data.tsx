// PumpkinClicker
import pumpkinClickerBanner from '../../assets/projects/pumpkinClicker/Banner.png';
import pumpkinClicker1 from '../../assets/projects/pumpkinClicker/Screenshot2.png';
import pumpkinClicker2 from '../../assets/projects/pumpkinClicker/Responsive.jpg';
import pumpkinClicker3 from '../../assets/projects/pumpkinClicker/Screenshot1.png';
import miniature from '../../assets/projects/pumpkinClicker/PumpkinClicker.webp'

// Yumbites
import miniature2 from '../../assets/projects/YumBites/YumBitesBanner.webp'
import YumBites1 from '../../assets/projects/YumBites/Screenshot1.webp'
import YumBites2 from '../../assets/projects/YumBites/Screenshot2.webp'
import YumBites3 from '../../assets/projects/YumBites/responsive.webp'
import YumBitesBanner from '../../assets/projects/YumBites/Banner.webp'



import HTML from '../../assets/about/HTML.webp';
import CSS from '../../assets/about/CSS.webp';
import JS from '../../assets/about/JS.webp';
import TS from '../../assets/about/TS.webp';
import React from '../../assets/about/React.webp';
import Node from '../../assets/about/NodeJS.webp';
import Figma from '../../assets/about/Figma.webp';

import linkedin from '../../assets/about/LinkedIn.webp';
import github from '../../assets/about/Github.svg';
import cv from '../../assets/about/Doc.webp';



export const projects = [
    {
        id: 1,
        title: 'YumBites',
        backgroundImage: miniature2,
        url: 'https://washupo.github.io/YumBites/',
        description: (
            <>
            YumBites est la recréation pixel perfect de la&nbsp;  
            <a href='https://www.behance.net/gallery/184606647/YumBites-web-design' target='_blank' className='italic underline'> 
            maquette d'un restaurant fictif  découverte sur Behance 
            </a>.  
            Ce projet est un véritable défi de précision, chaque élément étant intégré pour refléter fidèlement la vision originale de la designer.En plus de m'initier au développement React, ce projet me permet d'affiner ma capacité à transformer une conception statique en une expérience interactive et engageante. D'autres fonctionnalités telles que la réservation, le formulaire de contact et des animations seront ajoutées durant les prochaines semaines.
            </>
            ),
        technos: 'HTML5, CSS3, React, Javascript',
        banner: YumBitesBanner,
        img1: YumBites1,
        img2: YumBites2,
        img3: YumBites3,
    },
    {
        id: 2,
        title: 'Pumpkin Clicker',
        backgroundImage: miniature,
        url: 'https://washupo.github.io/Pumpkin-clicker/#',
        description: "Cookie Clicker est un projet réalisé en équipe avec pour objectif d'apprendre JavaScript. Inspiré du célèbre jeu original, notre version se veut à la fois minimaliste et esthétique, offrant ainsi une expérience utilisateur conviviale. Ce projet nous a permis d'explorer les concepts fondamentaux de JavaScript tout en mettant en pratique nos compétences en conception pour créer une interface attrayante et facile à utiliser.",
        technos: 'HTML5, CSS3, Javascript',
        banner: pumpkinClickerBanner,
        img1: pumpkinClicker1,
        img2: pumpkinClicker2,
        img3: pumpkinClicker3,
    },
];

export const skills = [
    { image: HTML, label: 'HTML', width: 'w-[80%]' },
    { image: CSS, label: 'CSS', width: 'w-[80%]' },
    { image: JS, label: 'JavaScript', width: 'w-[60%]' },
    { image: TS, label: 'TypeScript', width: 'w-[40%]' },
    { image: React, label: 'React', width: 'w-[65%]' },
    { image: Node, label: 'Node', width: 'w-[30%]' },
    { image: Figma, label: 'Figma', width: 'w-[55%]' },
]

export const links = [
    { text: 'Github', color: 'bg-green-700', img: github, url: 'https://github.com/washupo', target: '_blank'},
    { text: 'Linkedin', color: 'bg-green-700', img: linkedin, url: 'https://www.linkedin.com/in/paulinewashukenyi/', target: '_blank'},
    { text: 'Télécharger CV', color: 'bg-green-700', img: cv, url: 'src/assets/download/CV PaulineWashukenyi.pdf', download:'CV_PaulineWashukenyi.pdf'}
  ]