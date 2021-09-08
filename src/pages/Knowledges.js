import React from 'react';
import Navigation from '../components/Navigation';
import Langages from '../components/knowledges/Langages';
import Experience from '../components/knowledges/Experience';
import OtherSkills from '../components/knowledges/OtherSkilss';
import Hobbies from '../components/knowledges/Hobbies';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowlegesContent">
                <Langages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;