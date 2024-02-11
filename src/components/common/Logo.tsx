interface LogoProps {
    size: 'nav' | 'screen'
    className?: string;
    onClick?: () => void;
  }

export const Logo = ({ size, className, onClick}: LogoProps) => {
    const textSizeClass = size === 'nav' ? 'text-4xl lg:text-5xl' : 'text-7xl sm:text-9xl md:text-[10rem] fade';
    const name = 'Pauline W.';

    const handleMouseInOut = (index: number, isMouseEnter: boolean) => (event: React.MouseEvent<HTMLSpanElement>) => {
        const currentLetter = event.currentTarget;
        const previousLetter = currentLetter.parentElement?.children[index - 1] as HTMLSpanElement | undefined;
        const nextLetter = currentLetter.parentElement?.children[index + 1] as HTMLSpanElement | undefined;
    
        currentLetter.classList.toggle('text-[135%]', isMouseEnter);
        if (nextLetter) {
          nextLetter.classList.toggle('text-[120%]', isMouseEnter);
        }
        if (previousLetter) {
          previousLetter.classList.toggle('text-[120%]', isMouseEnter);
        }
    };

    return (
        <div className={`${className}`} onClick={onClick}>
        <h1 className={`font-bold font-Bangers ${textSizeClass}`}>
          {name.split('').map((letter, index) => (
            <span 
            key={index}
            onMouseEnter={handleMouseInOut(index, true)}
            onMouseLeave={handleMouseInOut(index, false)}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
    )
};