interface ResetProps{
    disabled:boolean,
    onReset:()=>void
}

const ResetButton = ({disabled,onReset}:ResetProps) => {
  return (
    <button
      type="button"
      className="btn btn-danger"
      disabled={disabled}
      onClick={onReset}
    >
      Reset
    </button>
  );
}

export default ResetButton