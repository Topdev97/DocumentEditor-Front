
const Footer = () => {
 
    const today = new Date;

    return (
        <footer className="p-[20px] md:p-[40px] lg:p-[60px] bg-black/30">
            <div className="text-center max-w-[1400px] mx-auto">
                {/* <h2 className="text-lg md:text-xl font-bold text-white"><span className="text-lg font-medium" >&copy;{today.getFullYear()} XYZ</span></h2> */}
            </div>
        </footer>
    )
}

export default Footer;