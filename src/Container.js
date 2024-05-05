import React, { useState, useRef, useEffect } from 'react';
import "./Container.css"

function Container() {
    const [targetDate, setTargetDate] = useState('');
    const [remainingTime, setRemainingTime] = useState(' set the time');

    const intervalRef = useRef();

    const getTimeRemaining = () => {
        const targetTime = Date.parse(targetDate);
        const currentTime = Date.parse(new Date());
        const timeDifference = targetTime - currentTime;
        console.log(targetTime,currentTime,timeDifference)

        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        console.log(hours,minutes,seconds)

        return { hours, minutes, seconds };
    };

    const startCountdown = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            const { hours, minutes, seconds } = getTimeRemaining();
            setRemainingTime(`${hours}h ${minutes}m ${seconds}s`);

            if (hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(intervalRef.current);
                setRemainingTime('Countdown complete!');
            }
            
        }, 0);
    };

    const clearTimer = () => {
        clearInterval(intervalRef.current);
        setRemainingTime('set the time');
    };

    return (
        <div className="bg"><div className="container">
           
        <label htmlFor="target-date">Enter target date and time:</label><br />
        <input
            type="datetime-local"
            id="target-date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
        /><br/>
        <button className="bnt1"onClick={startCountdown}>Start Countdown</button>
        <button className="bnt2"onClick={clearTimer}>Clear Timer</button><br />
        <div id="countdown">{remainingTime}</div>
    </div></div>
        
    );
}

export default Container;
