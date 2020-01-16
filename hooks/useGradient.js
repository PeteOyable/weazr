import { useState, useEffect } from "react";
import constants from "../constants";
import dayjs from "dayjs";

const defineDayMoment = () => {
  const hour = dayjs().hour();
  console.log(hour);
  if (constants.MOMENT.MORNING.includes(hour)) {
    return constants.COLORS.GRADIENTS.MORNING;
  } else if (constants.MOMENT.AFTERNOON.includes(hour)) {
    return constants.COLORS.GRADIENTS.AFTERNOON;
  } else if (constants.MOMENT.EVENING.includes(hour)) {
    return constants.COLORS.GRADIENTS.EVENING;
  } else {
    return constants.COLORS.GRADIENTS.NIGHT;
  }
}

const useGradient = () => {
  const [gradient, setGradient] = useState([]);

  useEffect(() => {
    setGradient(defineDayMoment());
    return () => { };
  }, [gradient])

  return {
    gradient
  }
}

export default useGradient;