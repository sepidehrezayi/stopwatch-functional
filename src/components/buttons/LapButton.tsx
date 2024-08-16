interface LapProps{
    disabled:boolean,
    onLap:()=>void
}

const LapButton = ({disabled,onLap}:LapProps) => {
  return (
    <button
      type="button"
      className="btn btn-success"
      disabled={disabled}
      onClick={onLap}
    >
      Lap
    </button>
  );
}

export default LapButton