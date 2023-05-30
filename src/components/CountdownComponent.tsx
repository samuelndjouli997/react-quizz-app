import React, { useEffect, useState } from 'react';
import { CountdownComponentProps } from '../types/types';

const CountdownComponent: React.FC<CountdownComponentProps> = ({ nb, onDone }) => {
  const [timer, setTimer] = useState<number>(10);
  const [isDone, setIsDone] = useState<boolean>(false);

  
  useEffect(() => {
    // here we reset the timer to 30 and isDone state when the nb prop changes (when the active question changes)
    setTimer(30);
    setIsDone(false);
  }, [nb]);

  useEffect(() => {
    // set an interval that decreases the timer by 1 every second
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    // when the timer reaches 0, clear the interval and call onDone
    if (timer === 0 && !isDone) {
      clearInterval(interval);
      setIsDone(true);
      onDone();
    }
    
    // clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [timer, isDone, onDone]);

  const progress = ((30 - timer) / 30) * 100; // Calculate progress percentage
  const borderSize = 8; // Border width in pixels
  const circumference = 2 * Math.PI * ((100 - borderSize) / 2); // Calculate the circumference of the inner circle


  return (
    <div className="relative w-24 h-24">
    {/* Progress bar circle */}
      <svg className="absolute top-0 left-0" width="100%" height="100%" viewBox="0 0 100 100">
        <circle
          className="fill-transparent stroke-gray-300"
          cx="50"
          cy="50"
          r={(100 - borderSize) / 2}
          strokeWidth={borderSize}
        />
        <circle
          className={`${timer <= 10 ? 'stroke-red-500' : 'stroke-primary-green'} fill-transparent `}
          cx="50"
          cy="50"
          r={(100 - borderSize) / 2}
          strokeWidth={borderSize}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          transform="rotate(-90 50 50)"
        />
      </svg>
      {/* Timer */}
      <span
        className={`${timer <= 10 ? 'text-red-500' : 'text-primary-green'} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold `}
      >
        {timer}s
      </span>
    </div>
  );
};

export default CountdownComponent;
