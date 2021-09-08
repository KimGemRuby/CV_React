import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';

export default class ProjectList extends Component {
    state = {
        projets:portfolioData
    }

    render() {
        let {projets} = this.state;

        return (
            <div className="portfolioContent"> 
             <ul className="radioDisplay">

             </ul>

             <div className="projects">
                 {
                     projets.map(item => {

                        return (
                            <Projets
                            item={item}
                            />
                        )
                     })
                 }
             </div>
            </div>
        );
    }
}