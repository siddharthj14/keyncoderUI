import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ label, value }) => {
    return (
        <div style={{ width: '100px', margin: '0 20px' }}>
            <CircularProgressbar
                value={value}
                text={`${value}% ${label}`}
                styles={buildStyles({
                    pathColor: `rgba(62, 152, 199, ${value / 100})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6'
                })}
            />
        </div>
    );
};

export default CircularProgress;
