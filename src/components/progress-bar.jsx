import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({percentage}) => {
  return <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',

                // Text size
                textSize: '12px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
                
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                textColor: '#000000',
                trailColor: '#d6d6d6',
                backgroundColor: '#141446',
            })}
     />;
}

export default ProgressBar
