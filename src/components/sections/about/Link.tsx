// Link.tsx
//Button.tsx
interface ButtonProps {
    text: string;
    color: string;
    img: string;
    url: string;
    target?: string;
    download?: string;
}

export default function Button({ text, color, img, url, target, download }: ButtonProps) {
    return (
        <div className={`bg-green-900 rounded-sm font-bold shadow-xl w-full sm:w-auto`}>
            <a
                className={` ${color} border-2 border-black rounded-sm py-2 px-10 text-white relative translate-x-1 hover:translate-x-0 -translate-y-1 hover:translate-y-0 font-Patrick uppercase flex gap-2 items-center justify-center w-full`}
                href={url}
                target={target}
                download={download}            
                >
                {img && <img src={img} alt="" className='w-5 h-auto' />} {/* Affiche l'image uniquement si img est défini */}
                {text}
            </a>
        </div>
    )
}