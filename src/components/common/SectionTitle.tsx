interface SectionTitleProps {
    title: string,
    color: string,
    className?: string, 
}

export default function SectionTitle({title, color, className} : SectionTitleProps) {
    return (
        <div className={`font-Bangers text-center text-5xl sm:text-6xl px-8 py-4 z-10 shadow-lg border-black border-2 text-white w-max fade ${color} ${className}`}>
            <h1>
            {title}
            </h1>
        </div>
    )
}