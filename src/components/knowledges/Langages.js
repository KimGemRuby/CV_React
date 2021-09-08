import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Langages extends Component {
 state = {
     langages: [
         {id: 1, value: "Javascript", xp:1.8},
         {id: 2, value: "Css", xp:2},
         {id: 3, value: "Ruby", xp:0.7},
         {id: 4, value: "Ruby on rails", xp:0.4}
     ],
     framework: [
         {id: 1, value: "React", xp:1.4},
         {id: 2, value: "Bootstrap", xp:2},
         {id: 3, value: "Sass", xp:1.5},
         {id: 4, value: "material UI", xp:0.5}
     ]
 }

     render() {
        let {langages, frameworks} = this.state;

        return (
            <div className="langagesFrameworks">
                <ProgressBar 
                    langages={langages}
                    className="langagesDisplay"
                    title="langages"
                />
                <ProgressBar 
                    langages={frameworks}
                    title="frameworks et bibliotheques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Langages;