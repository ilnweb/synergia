import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import ReactSkillBar from 'react-skillbars';

const SkillBarItem = ({countUp}) => {
    const [skillBar, setSkillBar] = useState(false);
    const skillLevel = [
        { type: 'one', level: countUp }
    ];
    return (
        <>
            <ScrollTrigger onEnter={()=> setSkillBar(true)} onExit={()=> setSkillBar(false)}>
                <div className="skill__area-item-inner">
                    {skillBar && <ReactSkillBar skills={skillLevel} height={10} animationDuration={2000} />}
                    <span className="skill__area-item-count">
                        <span>{skillBar && <CountUp start={0} end={countUp} duration={4} delay={1}></CountUp>}</span>%
                    </span>
                </div>
            </ScrollTrigger>
        </>
    );
};

export default SkillBarItem;