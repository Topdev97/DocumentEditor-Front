import { useEffect, useRef, useState } from "react";
import { BsLayers } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { MdCheckCircleOutline } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";


type ModalType = {

    modalOpen: boolean;
    setModalOpen: (val: boolean) => void;
}

const SelectPlanDialog = ({ modalOpen, setModalOpen }: ModalType) => {
    const modal = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<string>('ten');

    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!modal.current) return;
            if (!modalOpen || modal.current.contains(target as Node)) return;
            setModalOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    }, [modalOpen, setModalOpen]);

    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!modalOpen || keyCode !== 27) return;
            setModalOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    }, [modalOpen, setModalOpen]);

    const onClickConfirmHandle = () => {
        setModalOpen(false);
    }

    const onClickCancelHandle = () => {
        setModalOpen(false);
    }


    return (
        <div className={`fixed inset-0 z-50  left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-[#00000080] px-4 py-5 ${modalOpen ? "block" : "hidden"}`} >
            <div ref={modal} className="w-full max-w-[640px] rounded-xl bg-white p-6 relative" >
                <div onClick={onClickCancelHandle}
                    className="absolute right-4 top-4 w-6 h-6 hover:opacity-75 transition-all duration-300 cursor-pointer">
                    <RxCross2 className="text-custom-black-text text-3xl" />
                </div>
                <div className="flex justify-start items-center gap-x-3">
                    <div className="border-[1px] border-[#CCC] p-2 rounded-lg w-12 h-12 flex justify-center items-center">
                        <BsLayers className="text-custom-black-text text-3xl" />
                    </div>
                    <div className="">
                        <h3 className="text-custom-black-title text-2xl font-bold">Select Plan</h3>
                        <p className="text-custom-black-text">
                            Simple and flexible per user pricing.
                        </p>
                    </div>
                </div>
                <hr className="text-custom-black-text w-full my-6" />
                <div className="flex justify-center items-center flex-col md:flex-row gap-5">
                    <div onClick={() => setSelected("ten")}
                        className={`relative cursor-pointer w-full md:w-1/2 border-2 rounded-lg p-5 ${selected == "ten" ? "border-custom-pink" : "border-[#CCC]"}`}>
                        <div className='absolute right-0 top-3'>
                            <div className={`box mr-4 flex h-5 w-5 items-center justify-center rounded border-stroke border ${selected == "ten" && 'bg-custom-pink'}`}>
                                <FaCheck className={`h-[10px] w-[10px] rounded-sm text-white ${selected == "ten" ? "block" : "hidden"}`} />
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-custom-black-title">
                            $10/mth
                        </h3>
                        <p className="text-custom-black-text flex justify-between md:justify-start flex-row  md:flex-col">
                            <p className="font-bold text-custom-black-title">
                                Basic plan
                            </p>
                            <p>
                                Billed annually
                            </p>
                        </p>
                        <ul className="hidden md:block mt-4 space-y-2">
                            <li className="relative pl-6 text-custom-black-title">
                                <MdCheckCircleOutline className="text-[32px] absolute top-1/2 -translate-y-1/2 left-0 text-custom-pink pr-3" />
                                Basic features
                            </li>
                            <li className="relative pl-6 text-custom-black-title">
                                <MdCheckCircleOutline className="text-[32px] absolute top-1/2 -translate-y-1/2 left-0 text-custom-pink pr-3" />
                                Basic reporting
                            </li>
                            <li className="relative pl-6 text-custom-black-title">
                                <MdCheckCircleOutline className="text-[32px] absolute top-1/2 -translate-y-1/2 left-0 text-custom-pink pr-3" />
                                Up to 10 individual users
                            </li>
                            <li className="relative pl-6 text-custom-black-title">
                                <MdCheckCircleOutline className="text-[32px] absolute top-1/2 -translate-y-1/2 left-0 text-custom-pink pr-3" />
                                20GB data per user
                            </li>
                        </ul>
                    </div>
                    <div onClick={() => setSelected("twenty")}
                        className={`relative cursor-pointer w-full md:w-1/2 border-2 rounded-lg p-5 ${selected == "twenty" ? "border-custom-pink" : "border-[#CCC]"}`}>
                        <div className='absolute right-0 top-3'>
                            <div className={`box mr-4 flex h-5 w-5 items-center justify-center rounded border-stroke border ${selected == "twenty" && 'bg-custom-pink'}`}>
                                <FaCheck className={`h-[10px] w-[10px] rounded-sm text-white ${selected == "twenty" ? "block" : "hidden"}`} />
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-custom-black-title">
                            $20/mth
                        </h3>
                        <p className="text-custom-black-text flex justify-between md:justify-start flex-row  md:flex-col">
                            <p className="font-bold text-custom-black-title">
                                Business plan
                            </p>
                            <p>
                                Billed annually
                            </p>
                        </p>
                        <ul className="hidden md:block mt-4 space-y-2">
                            <li className="relative pl-6 text-custom-black-title">
                                <MdCheckCircleOutline className="text-[32px] absolute top-1/2 -translate-y-1/2 left-0 text-custom-pink pr-3" />
                                Advanced features
                            </li>
                            <li className="relative pl-6 text-custom-black-title">
                                <MdCheckCircleOutline className="text-[32px] absolute top-1/2 -translate-y-1/2 left-0 text-custom-pink pr-3" />
                                Advanced reporting
                            </li>
                            <li className="relative pl-6 text-custom-black-title">
                                <MdCheckCircleOutline className="text-[32px] absolute top-1/2 -translate-y-1/2 left-0 text-custom-pink pr-3" />
                                Up to 20 individual users
                            </li>
                            <li className="relative pl-6 text-custom-black-title">
                                <MdCheckCircleOutline className="text-[32px] absolute top-1/2 -translate-y-1/2 left-0 text-custom-pink pr-3" />
                                40GB data per user
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="text-custom-black-text w-full my-6" />

                <div className="mt-5 md:flex justify-between items-center">
                    <button className={`bg-white text-center hidden md:flex text-custom-black-title border-2 border-[#CCC] rounded-lg text-lg py-[10px] px-4 hover:opacity-75 hover:border-custom-pink duration-300 transition-all justify-center items-center gap-2`} >
                        <IoChatbubblesOutline className="text-custom-black-title text-3xl" />
                        Chat to us
                    </button>
                    <div className="flex justify-center items-center flex-col md:flex-row gap-3">
                        <button onClick={onClickCancelHandle}
                            className={` bg-white text-center text-custom-black-title w-full md:w-auto border-2 border-[#CCC] rounded-lg text-lg py-[10px] px-4 hover:opacity-75 hover:border-custom-pink duration-300 transition-all`} >
                            Cancel
                        </button>
                        <button onClick={() => {
                            if (selected == "twenty") {
                                window.location.href = 'https://buy.stripe.com/test_fZefZleHY6EP2B27st' 
                            } else {
                                window.location.href = 'https://buy.stripe.com/test_5kA3czfM26EPgrSdQQ'
                            }
                        }}
                            className={` bg-custom-pink border-2 border-custom-pink w-full md:w-auto text-center text-white rounded-lg text-lg py-[10px] px-4 hover:opacity-75 duration-300 transition-all`}>
                            Select plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default SelectPlanDialog;