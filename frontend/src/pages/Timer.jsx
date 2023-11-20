import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const Timer = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    return {
      years,
      months: months % 12,
      days: days % 30,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div>
        <span>{timeRemaining.years}</span> years
      </div>
      <div>
        <span>{timeRemaining.months}</span> months
      </div>
      <div>
        <span>{timeRemaining.days}</span> days
      </div>
    </div>
  );
};

export default Timer;
