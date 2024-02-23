import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [time, setTime] = useState({ minutes: 2, seconds: 0, milliseconds: 0 });
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0 && time.milliseconds === 0) {
        clearInterval(interval);
        setFinished(true);
      } else {
        setTime(prevTime => {
          let { minutes, seconds, milliseconds } = prevTime;
          milliseconds -= 10;
          if (milliseconds < 0) {
            milliseconds = 990;
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
        {/* {finished ? (
          <span>Finished!</span>
        ) : ( */}
          <p className="md:text-4xl text-2xl text-white">
          
          {time.minutes < 10 ? '0' + time.minutes : time.minutes}:
            {time.seconds < 10 ? '0' + time.seconds : time.seconds}.
          <span className="text-base md:text-lg">{time.milliseconds < 100
              ? '0' + (time.milliseconds < 10 ? '0' + time.milliseconds : time.milliseconds)
              : time.milliseconds}</span>
        </p>
        {/* )} */}
      </>
  );
}

export default CountdownTimer;
