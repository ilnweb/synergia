import Link from 'next/link';
import ResponsiveMenu from "../responsive-menu";

const MobileMenuPopup = ({ isOpen, setIsOpen, addClass, popupLogo }) => {
    return (
        <div className={`menu__bar-popup ${addClass} ${isOpen ? "show" : ""}`}>
            <div className="menu__bar-popup-top">
                <div className="logo">
                    <Link href="/"><img src={popupLogo?.src} alt='logo' /></Link>
                </div>
                <div className="close" onClick={() => setIsOpen(false)}>
                    <i className="fal fa-times"></i>
                </div>
            </div>
            <div className="responsive-menu mean-container">
                <div className="mean-bar">
                    <div className="mean-nav">
                        <ResponsiveMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenuPopup;