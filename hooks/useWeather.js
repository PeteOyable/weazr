import { useState, useEffect } from "react";

import { getCurrentConditions, getForecastByHour } from '../api';
import constants from "../constants";

const useWeather = () => {
  const [currentConditions, setCurrentConditions] = useState(null);
  const [forecastByHour, setForecastByHour] = useState([]);
  const [init, setInit] = useState(false);
  const [error, setError] = useState(false);
  

  const fetchCurrentConditions = async () => {
    const response = await getCurrentConditions();
    if (response.status === constants.MESSAGES.OK) {
      setCurrentConditions(response.result);
    } else {
      setError(true);
    }
  };

  const fetchForecastByHour = async () => {
    const response = await getForecastByHour();
    if (response.status === constants.MESSAGES.OK) {
      setForecastByHour(response.result);
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    if (!init) {
      /* fetchCurrentConditions();
      fetchForecastByHour(); */
      setInit(true);
    }
    return () => { };
  }, [init])


  return {
    currentConditions,
    forecastByHour
  }
}

export default useWeather;