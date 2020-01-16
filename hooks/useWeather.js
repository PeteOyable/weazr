import { useState, useEffect } from "react";

//import { getCurrentConditions, getForecastByHour , getForecastForWeek} from '../api';
import { getCurrentConditions, getForecastByHour, getForecastForWeek } from '../mocks';
import constants from "../constants";

const useWeather = () => {
  const [currentConditions, setCurrentConditions] = useState(null);
  const [forecastByHour, setForecastByHour] = useState([]);
  const [forecastForWeek, setForecastForWeek] = useState([]);
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

  const fetchForecastForWeek = async () => {
    const response = await getForecastForWeek();
    if (response.status === constants.MESSAGES.OK) {
      setForecastForWeek(response.result);
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    if (!init) {
      /* fetchCurrentConditions();
      fetchForecastByHour();
      fetchForecastForWeek(); */

      setCurrentConditions(getCurrentConditions());
      setForecastByHour(getForecastByHour());
      setForecastForWeek(getForecastForWeek());
      setInit(true);
    }
    return () => { };
  }, [init])
  

  return {
    currentConditions,
    forecastByHour,
    forecastForWeek
  }
}

export default useWeather;