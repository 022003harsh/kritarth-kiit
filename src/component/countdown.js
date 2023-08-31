import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDiff = targetTime - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-center">
      <div className="text-2xl md:text-4xl font-semibold text-white font-raleway">
        Mark your calender 🗓️
      </div>
      <div className="text-xl ">
        <div className="font-semibold text-1xl md:text-3xl text-white pb-2">
          16-17 Sept, 2023
        </div>
        <div className="text-1xl md:text-4xl font-semibold pt-2 text-white font-raleway">
          Countdown of Hope
        </div>
      </div>
      <div className="flex flex-row pt-6">
        <div className="text-xl bg-white w-full md:w-1/4 lg:w-1/5 mx-3">
          <div className="font-inter text-8xl bg-gradient bg-clip-text text-transparent">
            {timeRemaining.days}
          </div>
          <div className="font-semibold text-xl md:text-3xl bg-gradient bg-clip-text text-transparent">
            Days
          </div>
        </div>
        <div className="text-xl bg-white w-full md:w-1/4 lg:w-1/5 mx-3">
          <div className="font-inter text-8xl bg-gradient bg-clip-text text-transparent">
            {timeRemaining.hours}
          </div>
          <div className="font-semibold text-xl md:text-3xl bg-gradient bg-clip-text text-transparent">
            Hours
          </div>
        </div>
        <div className="text-xl bg-white w-full md:w-1/4 lg:w-1/5 mx-3">
          <div className="font-inter text-8xl bg-gradient bg-clip-text text-transparent">
            {timeRemaining.minutes}
          </div>
          <div className="font-semibold text-xl md:text-3xl bg-gradient bg-clip-text text-transparent">
            Minutes
          </div>
        </div>
        <div className="text-xl bg-white w-full md:w-1/4 lg:w-1/5 mx-3">
          <div className="font-inter text-8xl bg-gradient bg-clip-text text-transparent">
            {timeRemaining.seconds}
          </div>
          <div className="font-semibold text-xl md:text-3xl bg-gradient bg-clip-text text-transparent">
            Seconds
          </div>
        </div>
      </div>
</div>

  );
};

export default CountdownTimer;
