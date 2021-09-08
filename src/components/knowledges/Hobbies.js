import React from 'react';

const Hobbies = () => {
    return (
        <div>
            <h3>Interets</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Cyclisme</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span>Randonnees</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-bitcoin"></i>
                    <span>Veiille informatique</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-seedling"></i>
                    <span>Administration virtual machine</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-rocket"></i>
                    <span>Espace NFT</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;