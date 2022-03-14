import './Navbar.css';
import { useEffect, useState } from 'react';


function Navbar(){

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [timerActive, setTimerActive] = useState(true);
    const [timerId, setTimerId] = useState(0);

    useEffect(() => {
        setSeconds(0);
        setMinutes(1);
    }, [])

    useEffect(() => {
        if(!timerActive) {
            let timerId = setTimeout(timerCountdown, [1000]);
            setTimerId(timerId);
            console.log(timerId, 'activate timer');
        }
        if(timerActive) {
            console.log(timerId, 'deactivate timer')
            clearTimeout(timerId);
        }
    }, [seconds,timerActive])

    // const timerUpdate = () => {
    //     // if (timerActive) {
    //     //     setTimerActive(false);
    //     //     clearInterval(timerCountdownIntervalId);
    //     // }
    //     // else {
    //     //     setTimerActive(true);
    //     //     timerCountdownIntervalId = setInterval(timerCountdown, [1000])
    //     // }
    //     timerCountdownIntervalId = setInterval(timerCountdown, [1000])
    // }

    const timerCountdown = () => {
        console.log(seconds, 'seconds before');
        if (seconds !== 0) {
            setSeconds(seconds => seconds - 1);
            console.log(seconds, 'seconds after');
        }
        if (seconds === 0) {
            if(minutes > 0) {
                console.log(minutes)
                setSeconds(seconds => seconds = 59);
                setMinutes(minutes => minutes - 1);
                console.log(minutes);
                console.log(seconds);
            } else {
                setTimerActive(false);
                clearTimeout(timerId);
            }
        }
    }

    const handleClick = () => {
        if (timerActive) setTimerActive(false);
        if (!timerActive) setTimerActive(true);
        // console.log(timerActive);
    }

    return (
        <>
        <div className='navbar-container'>
            <div className='navbar-timer-wrapper'>
                <div className='navbar-timer'
                onClick={() => handleClick()}>
                    {minutes}:{String(seconds).padStart(2, 0)}
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;
