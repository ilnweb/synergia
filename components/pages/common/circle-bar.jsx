import React, { useEffect } from 'react';

const CircleBar = ({progressBar}) => {
    useEffect(() => {
        function animateCircleProgressBar(element) {
            const percent = parseInt(element.getAttribute('data-percent'), 10);
            const progressElement = element.querySelector('.circle__progress-item-bar');
            const percentElement = element.querySelector('.circle__progress-item-number');
            let currentPercent = 0;
            function updateProgress() {
                if (currentPercent <= percent) {
                    progressElement.style.background = `conic-gradient(var(--progressColor) ${currentPercent * 3.6}deg, var(--barColor) 0deg)`;
                    percentElement.textContent = `${currentPercent}%`;
                    currentPercent++;
                    requestAnimationFrame(updateProgress);
                }
            }
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        observer.disconnect();
                        updateProgress();
                    }
                });
            });
            observer.observe(element);
        }
        document.querySelectorAll('.circle__progress-item').forEach(animateCircleProgressBar);
    }, []);

    return (
        <div className="circle__progress">
            <div className="circle__progress-item" data-percent={progressBar}>
                <div className="circle__progress-item-bar">
                    <span className="circle__progress-item-number"></span>
                </div>
            </div>
        </div>
    );
};

export default CircleBar;
