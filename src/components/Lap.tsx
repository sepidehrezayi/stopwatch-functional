import { RxCross2 } from "react-icons/rx";
import timeFormatter from "../utils/timeFormatter";

interface Props {
  laps: number[];
  setLaps: React.Dispatch<React.SetStateAction<number[]>>;
}

const Lap = ({laps,setLaps}:Props) => {
  const handleDelete=(index:number)=>{
    setLaps(laps.filter((_,i)=>i!==index));
  }
  return (
    <ul className="list-group">
      {laps.map((lap, index) => (
        <li
          key={index}
          className="list-group-item d-flex align-items-center border-0 mb-1"
        >
          <span>
            Lap {index + 1} : {timeFormatter(lap)}
          </span>
          <button
            className="btn btn-lg"
            onClick={() => handleDelete(index)}
          >
            <RxCross2 />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Lap;
