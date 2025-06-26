import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString()); // update time every second
    }, 1000);

    // Cleanup timer when component unmounts
 
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🕒 Live Clock</h2>
      <h1>{time}</h1>
    </div>
  );
}

export default Clock;
