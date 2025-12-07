"use client"
import React, { useEffect } from "react";
import useScrollToTop from "./use-scroll-to-top";

const ScrollToTop = ({addClass}) => {
    const { stick, onClickHandler } = useScrollToTop();
    useEffect(() => {
        const scrollPath = document.querySelector(".scroll-up path");
        const pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = "none";
        scrollPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = "stroke-dashoffset 10ms linear";
        const updateScroll = () => {
            const scroll = window.scrollY;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const height = docHeight - winHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            scrollPath.style.strokeDashoffset = progress;
        };
        updateScroll();
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    return (
        <div className={`scroll-up ${addClass} ${stick && "active-scroll"}`} onClick={onClickHandler}>
            <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" /></svg>
        </div>
    );
};

export default ScrollToTop;