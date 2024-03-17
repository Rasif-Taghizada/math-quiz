import { useEffect, useState } from "react";

import propTypes from "prop-types";

export const CountDown = ({ time, finished }) => {
  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
        setIsFinished(true);
      } else if (seconds === 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  useEffect(() => {
    if (isFinished) {
      finished(isFinished);
    }
  }, [isFinished, finished]);
  return (
    <>
      <p>
        Qalan vaxtı:{" "}
        {(minutes < 10 ? "0" + minutes : minutes) +
          ":" +
          (seconds < 10 ? "0" + seconds : seconds)}
      </p>
    </>
  );
};

CountDown.propTypes = {
  time: propTypes.number.isRequired,
  finished: propTypes.func.isRequired,
};
