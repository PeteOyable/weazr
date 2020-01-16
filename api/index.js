import constants from "../constants";

const API_KEY = 'JB3BnJetSno49jPgY3RkOAjLmgN5JHuh';
const LOCATION_KEY = '56186'; //Montreal
const API_URL = 'https://dataservice.accuweather.com';

export const getCurrentConditions = async () => {
  try {
    const response = await fetch(`${API_URL}/currentconditions/v1/${LOCATION_KEY}?apikey=${API_KEY}`);
    const conditions = await response.json();
    if (response.status === 200) {
      return {
        status: constants.MESSAGES.OK,
        result: conditions[0]
      };
    } else {
      return {
        status: constants.MESSAGES.NOK,
        result: null
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export const getForecastByHour = async () => {
  try {
    const response = await fetch(`${API_URL}/forecasts/v1/hourly/12hour/${LOCATION_KEY}?apikey=${API_KEY}&metric=true`);
    const forecast = await response.json();
    if (response.status === 200) {
      const forecastForFiveHours = forecast.filter((value, index) => index < 5);
      return {
        status: constants.MESSAGES.OK,
        result: forecastForFiveHours
      };
    } else {
      return {
        status: constants.MESSAGES.NOK,
        result: null
      };
    }
  } catch (error) {
    console.log(error);
  }
}