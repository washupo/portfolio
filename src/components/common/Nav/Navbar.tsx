// NavBar component
import { useState } from "react";
import { Logo } from "../Logo";
import { Nav } from "./Nav";

export interface NavBarProps {
  handleScroll: (index: number) => void;
}

export default function NavBar({ handleScroll }: NavBarProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sections = [
    { id: 1, label: 'À propos' },
    { id: 2, label: 'Portfolio' },
    { id: 3, label: 'Contact' }
  ]

  return (
    <header className={`sticky top-0 flex flex-col uppercase font-Patrick font-bold text-xl z-50`}>
      <div className="h-[10vh] p-6 flex items-center justify-between w-full bg-white shadow-xl">
        <Logo
          size='nav'
          className="cursor-pointer"
          onClick={() => handleScroll(0)}
        />
        <button
          className={`${open ? "rotate-12" : "-rotate-12"} uppercase sm:hidden`}
          onClick={() => { handleOpen() }}
        >
          {open ? "close" : "menu"}
        </button>
        <Nav
          NavClassName="hidden sm:block"
          UlClassName="flex gap-8"
          sections={sections}
          handleScroll={handleScroll} 
          handleClose={handleClose}
          />
      </div>
      {open &&
       <Nav
       NavClassName="h-[90vh] bg-purple-400 bg-opacity-90"
       UlClassName="flex flex-col gap-6 justify-center items-center h-1/3"
       sections={sections}
       handleScroll={handleScroll} 
       handleClose={handleClose}
       />
      }
    </header>
  );
}