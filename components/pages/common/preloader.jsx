import React from 'react';

const Preloader = () => {
    return (
        <div className="theme-loader">
            <div className="spinner">
                <div className="spinner-bounce one"></div>
                <div className="spinner-bounce two"></div>
                <div className="spinner-bounce three"></div>
            </div>
        </div>
    );
};

export default Preloader;