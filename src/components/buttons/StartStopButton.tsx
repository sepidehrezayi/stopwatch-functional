interface Props{
    isRunning:boolean;
    onToggle :()=>void;
}

const StartStopButton = ({isRunning,onToggle}:Props) => {
  return (
    <button className="btn btn-primary" onClick={onToggle}>
      {isRunning ? "Stop" : "Start"}
    </button>
  );
}

export default StartStopButton