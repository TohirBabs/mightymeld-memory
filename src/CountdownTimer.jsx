import React, { useState, useEffect } from 'react';

function CountdownTimer({lose}) {
  const [time, setTime] = useState({ minutes: 0, seconds: 45, milliseconds: 0 });
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0 && time.milliseconds === 0) {
        clearInterval(interval);
        // setFinished(true);
        lose("lose")
      } else {
        setTime(prevTime => {
          let { minutes, seconds, milliseconds } = prevTime;
          milliseconds -= 1;
          if (milliseconds < 0) {
            milliseconds = 99;
            seconds -= 1;
          }
          if (seconds < 0) {
            seconds = 59;
            minutes -= 1;
          }
          return { minutes, seconds, milliseconds };
        });
      }
    }, 10); // Update every 10 milliseconds

    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
          <p
          style={{color: time.seconds < 10 ? "red":"white"}} className="md:text-4xl text-2xl ">
          
          {time.minutes < 10 ? '0' + time.minutes : time.minutes}:
            {time.seconds < 10 ? '0' + time.seconds : time.seconds}.
          <span className="text-base md:text-lg">{ (time.milliseconds < 10 ? '0' + time.milliseconds : time.milliseconds)
            }</span>
        </p>
        {/* )} */}
      </>
  );
}

export default CountdownTimer;
