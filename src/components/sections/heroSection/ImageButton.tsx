//ImageButton.tsx
interface ImageButtonProps {
    images: string | React.ReactNode ;
    labels: string;
    rotation: string | React.ReactNode;
    textPosition?: string;
    onClick: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    id?: string;
}

    export const ImageButton = ({  images, labels, rotation, textPosition, id, onMouseEnter, onMouseLeave, onClick }: ImageButtonProps) => {

    return (
        <>
                <div
                    className={`flex items-center justify-center ${rotation}`}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                    id={id}
                >
                    <img src={images} alt="" className="relative w-44 sm:w-72 md:w-80" />
                    {/* <button className={`p-5 text-center text-white text-lg md:text-3xl font-bold font-Patrick uppercase absolute ${textPosition}`} onClick={onClick}> */}
                    <button className={`p-5 text-center text-white text-2xl sm:text-4xl md:text-5xl font-bold font-Patrick uppercase absolute ${textPosition}`}>

                        {labels}
                    </button>
                </div>
        </>
    );
};