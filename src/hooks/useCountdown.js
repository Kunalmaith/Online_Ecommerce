import { useEffect, useState } from 'react';

// Helper function to calculate time remaining
const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date(); // Difference in milliseconds
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    // If sale has ended, set all to 0
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return timeLeft;
};

const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    // Set up the interval to update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000); // Update every 1 second (1000 ms)

    // Clean up the interval when the component unmounts or targetDate changes
    return () => clearInterval(timer);
  }, [targetDate]); // Re-run effect if targetDate changes

  // Function to add leading zero if number is less than 10
  const formatTime = (num) => String(num).padStart(2, '0');

  // Check if the timer has expired
  const isSaleEnded = Object.values(timeLeft).every(val => val === 0);

  return { formattedTime: {
    days: formatTime(timeLeft.days),
    hours: formatTime(timeLeft.hours),
    minutes: formatTime(timeLeft.minutes),
    seconds: formatTime(timeLeft.seconds),
  }, isSaleEnded };
};

export default useCountdown;