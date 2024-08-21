
type ButtonType = {
    className?: string;
    label: string;
    onClick: () => void
}

const Button = ({ label, className, onClick }: ButtonType) => {

    return (
        <button className={`${className} bg-gradient-to-r from-[#569BE7] to-[#4A60D5]  text-white rounded-[32px] text-lg py-[10px] px-4 hover:opacity-75 duration-300 transition-all`} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;