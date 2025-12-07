import { useState, useEffect } from "react";

function useScrollToTop() {
    const [stick, setStick] = useState(false);
    useEffect(() => {
        const scrollHandler = () => {
            setStick(window.pageYOffset > 50);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return { stick, onClickHandler: () => window.scrollTo({ top: 0, behavior: "smooth" }) };
}

export default useScrollToTop;