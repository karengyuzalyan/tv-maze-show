// Moule imports
import React from 'react';

// Css imports
import './index.scss';

export function InfoWrapper ({ title, info }) {
    return (
        <div className="additional-info d-flex f-column">
            <span className="show-favorite-color size-24">{title}</span>
            {info.map(item => (
                <div key={item.data}>
                    <span className="additional-info-data"><b>{`${item.name}`} </b>: {`${item.data}`}</span>
                </div>
            ))}
        </div>
    );
}
