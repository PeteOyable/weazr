import { useState, useEffect } from "react";
import constants from "../constants";
import dayjs from "dayjs";

const defineColors = () => {
  const hour = dayjs().hour();
  let gradient = constants.COLORS.GRADIENTS.NIGHT;
  let color = constants.COLORS.SIMPLE.NIGHT;
  console.log(hour);
  if (constants.MOMENT.MORNING.includes(hour)) {
    gradient = constants.COLORS.GRADIENTS.MORNING;
    color = constants.COLORS.SIMPLE.MORNING;
  } else if (constants.MOMENT.AFTERNOON.includes(hour)) {
    gradient = constants.COLORS.GRADIENTS.AFTERNOON;
    color = constants.COLORS.SIMPLE.AFTERNOON;
  } else if (constants.MOMENT.EVENING.includes(hour)) {
    gradient = constants.COLORS.GRADIENTS.EVENING;
    color = constants.COLORS.SIMPLE.EVENING;
  }

  return [gradient, color];
}

const useColors = () => {
  const [gradient, setGradient] = useState([]);
  const [color, setColor] = useState(null);

  useEffect(() => {
    const [gradient, color] = defineColors();
    setGradient(gradient);
    setColor(color);
    return () => { };
  }, [gradient, color])

  return {
    gradient,
    color
  }
}

export default useColors;