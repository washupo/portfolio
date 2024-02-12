//Nav.tsx
import { Sections } from "../../../types/types";
export interface NavProps {
    NavClassName: string;
    UlClassName: string;
    sections: Sections[];
    handleScroll: (index: number) => void;
    handleClose: () => void;
  }
  
  export const Nav = ({ NavClassName, UlClassName, sections, handleScroll, handleClose }: NavProps) => {

    return (
      <>
      <nav
            className={`${NavClassName}`}
          >
            <ul className={`${UlClassName}`}>
              {sections.map((section) => (
                <li
                  key={section.id}
                  onClick={() => {handleScroll(section.id); handleClose()}}
                  className="cursor-pointer"
                >
                  {section.label}
                </li>
              ))}
            </ul>
          </nav>
      </>
    )
  };