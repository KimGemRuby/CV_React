import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1> KIM Soly</h1>
                    <h2> Developpeur Front-end</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Dowload CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;