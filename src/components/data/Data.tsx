import pumpkinClickerBanner from '../../assets/projects/pumpkinClicker/Banner.png';
import pumpkinClicker1 from '../../assets/projects/pumpkinClicker/Screenshot2.png';
import pumpkinClicker2 from '../../assets/projects/pumpkinClicker/Responsive.jpg';
import pumpkinClicker3 from '../../assets/projects/pumpkinClicker/Screenshot1.png';

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
        title: 'Pumpkin Clicker',
        backgroundImage: '/src/assets/projects/pumpkinClicker/PumpkinClicker.webp',
        url: 'https://washupo.github.io/Pumpkin-clicker/#',
        description: "Cookie Clicker est un projet réalisé en équipe avec pour objectif d'apprendre JavaScript. Inspiré du célèbre jeu original, notre version se veut à la fois minimaliste et esthétique, offrant ainsi une expérience utilisateur conviviale. Ce projet nous a permis d'explorer les concepts fondamentaux de JavaScript tout en mettant en pratique nos compétences en conception pour créer une interface attrayante et facile à utiliser.",
        technos: 'HTML5, CSS3, Javascript',
        banner: pumpkinClickerBanner,
        img1: pumpkinClicker1,
        img2: pumpkinClicker2,
        img3: pumpkinClicker3,
    },
    {
        id: 2,
        title: 'Project 2',
        backgroundImage: 'https://picsum.photos/200/300',
        url: 'https://www.google.com',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut assumenda officia ut accusamus quam, magni harum molestias eum ipsam laboriosam esse porro asperiores! Soluta esse reiciendis laudantium voluptas tempore deleniti.',
        technos: 'React',
        banner: pumpkinClickerBanner,
        img1: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        img2: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        img3: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    }
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
    { text: 'Télécharger CV', color: 'bg-green-700', img: cv, url: '../../../assets/download/CV PaulineWashukenyi.pdf', download:'CV_PaulineWashukenyi.pdf'}
  ]