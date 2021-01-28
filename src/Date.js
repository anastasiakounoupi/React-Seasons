import React from 'react';
import './Date.css'

const GetDate = () => {
    const day = new Date().toLocaleDateString();

    return (
        <div className="date">
            <h4> The date is: {day}</h4>
        </div>
    );
}


export default GetDate;