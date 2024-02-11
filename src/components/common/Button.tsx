//Button.tsx
interface ButtonProps {
    text: string;
    color: string;
    onClick?: () => void;
}

export default function Button({ text, color, onClick }: ButtonProps) {
    return (
        <div className={`bg-orange-900 bg-or rounded-sm font-bold shadow-xl w-full sm:w-auto`}>
            <button
                className={` bg-${color}-700 border-2 border-black rounded-sm py-2 px-10 text-white relative translate-x-1 hover:translate-x-0 -translate-y-1 hover:translate-y-0 font-Patrick uppercase flex gap-2 items-center justify-center w-full`}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}