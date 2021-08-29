import meeting from "../assets/confirm-meeting.png";
import { Link } from "react-router-dom";

const Meeting = () => {
  return (
    <div className="meeting">
      <img src={meeting} />
      <Link to="/dashboard">
        <button>Done</button>
      </Link>
    </div>
  );
};

export default Meeting;
