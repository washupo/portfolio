interface skillsLevelProps {
    image: string;
    label: string;
    width: string;
}

export default function SkillsLevel({image, label, width}: skillsLevelProps) {
    return (
        <span className='grid gap-1 fade'>
            <p className='flex gap-2 place-self-center text-sm'>
                <img src={image} alt="" className='h-7 w-auto' />
                {label}
            </p>
            <span className='flex gap-2 py-2 border-black border-2 rounded-sm justify-center h-8 relative'>
                <span className={`bg-red-500 h-full top-0 left-0 z-[-1] absolute line ${width}`} />
            </span>
        </span>
    )
}