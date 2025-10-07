import React, { useEffect, useState } from 'react';

const MusicTimer = ({ duration }) => {
  const [timer, setTimer] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const MusicTime = (time) => {
    const total_seconds = Math.floor(time / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);
    const days = Math.floor(total_hours / 24);

    const seconds = total_seconds % 60;
    const minutes = total_minutes % 60;
    const hours = total_hours % 24;

    const items = [
      { label: 'Hours', value: hours },
      { label: 'Days', value: days },
      { label: 'Minutes', value: minutes },
      { label: 'Seconds', value: seconds },
    ];

    return (
      <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-5 pt-8 sm:pt-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="w-14 h-14 sm:w-16 sm:h-16 flex flex-col justify-center items-center bg-white text-black rounded-full shadow-md"
          >
            <p className="text-[14px] sm:text-[16px] font-sans font-[600]">
              {item.value.toString().padStart(2, '0')}
            </p>
            <p className="text-[10px] sm:text-[12px] font-sans font-[500]">{item.label}</p>
          </div>
        ))}
      </div>
    );
  };

  return <div>{MusicTime(timer)}</div>;
};

export default MusicTimer;
