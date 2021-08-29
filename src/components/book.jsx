import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookSession = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showConfirm, setShowConfirm] = useState(false);
  const [inperson, selectInPerson] = useState(false);
  const [time, selectTime] = useState(true);

  return (
    <div className="booking">
      <div className="booking__container">
        <div className="left">
          <h1>Select date and time</h1>
          <p>
            Pick whether you want to meet up in-person or virtually, then select
            a date and time that works for you
          </p>
          <div className="meeting-selection">
            <button
              className={`${inperson && "focus"}`}
              onClick={() => selectInPerson(true)}
            >
              In-person
            </button>
            <button>Virtual</button>
          </div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="right">
          <div className="date">
            <button>11:00am</button>
            <button>1:00pm</button>
            <button>2:00pm</button>
            <button
              onClick={() => {
                setShowConfirm(true);
                selectTime(true);
              }}
              className={`${time && "focus"}`}
            >
              3:00pm
            </button>
            <button>4:00pm</button>
          </div>
        </div>
      </div>

      <Link to="/confirm-meeting" style={{ textDecoration: "none" }}>
        <button className={`confirm ${showConfirm && "show-confirm"}`}>
          Confirm meeting
        </button>
      </Link>
    </div>
  );
};

export default BookSession;
