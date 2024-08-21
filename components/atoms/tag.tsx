import { RxCross2 } from "react-icons/rx";

type TagType = {
    className?: string;
    label: string;
    items: {
        label: any;
        value: any;
    }[];
    value: any;
    onClickCancel: (val: any) => void;
}

const Tag = ({ className, label, items, value, onClickCancel }: TagType) => {
    return (
        <span className={`${className} border-[1px] border-custom-pink bg-custom-bg-pink relative px-2 py-[2px] text-custom-black-title rounded-lg text-sm pr-6`}>
            {
                label
            }
            {
                items.map(item => item.label).join(",")
            }
            <span onClick={() => onClickCancel(value)}
                className="absolute top-1/2 -translate-y-1/2 right-1 hover:opacity-75 transition-all duration-300 cursor-pointer">
                <RxCross2 />
            </span>
        </span>
    )
}


export default Tag;