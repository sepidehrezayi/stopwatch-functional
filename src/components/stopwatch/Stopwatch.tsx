import { useState, useEffect } from "react";
import timeFormatter from "../../utils/timeFormatter";

import ResetButton from "../buttons/ResetButton";
import StartStopButton from "../buttons/StartStopButton";
import LapButton from "../buttons/LapButton";
import Lap from "../Lap";
import "./stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
  const handleToggle = () => setIsStarted(!isStarted);
  const handleReset = () => {
    setIsStarted(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => setLaps((prevLaps) => [...prevLaps, time]);

  useEffect(() => {
    let interval: number = 0;

    if (isStarted) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isStarted && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isStarted, time]);
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="text-center mb-4">
          <h1 className="font-italic">StopWatch</h1>
        </div>
        <div className="text-center mb-4">
          <h1 className="timer-display border rounded p-3 font-monospace">
            {timeFormatter(time)}
          </h1>
        </div>
        <div className="d-flex gap-2 mb-4">
          <StartStopButton isRunning={isStarted} onToggle={handleToggle} />
          <LapButton onLap={handleLap} disabled={!isStarted} />
          <ResetButton onReset={handleReset} disabled={isStarted} />
        </div>
        <Lap laps={laps} setLaps={setLaps} />
      </div>
    </>
  );
};

export default Stopwatch;
