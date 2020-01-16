import { useState } from "react";
import constants from "../constants";

const defineWeatherImage = (iconCode) => {
  let icon = require('../assets/icons/Sunny.png');
  if (iconCode >= 1 && iconCode < 5) {
    icon = require('../assets/icons/Sunny.png');
  } else if (iconCode >= 5 && iconCode < 7) {
    icon = require('../assets/icons/Cloud_Sun.png');
  } else if (iconCode >= 7 && iconCode < 12) {
    icon = require('../assets/icons/Cloudy.png');
  } else if (iconCode >= 12 && iconCode < 15 || iconCode >= 40 && iconCode < 43) {
    icon = require('../assets/icons/Rain.png');
  } else if (iconCode >= 15 && iconCode < 19) {
    icon = require('../assets/icons/Storm.png');
  } else if (iconCode >= 19 && iconCode < 25 || iconCode >= 43 && iconCode < 45) {
    icon = require('../assets/icons/Snow.png');
  } else if (iconCode >= 25 && iconCode < 31) {
    icon = require('../assets/icons/Storm.png');
  } else if (iconCode >= 33 && iconCode < 38) {
    icon = require('../assets/icons/Clear_night.png');
  } else if (iconCode >= 38 && iconCode < 40) {
    icon = require('../assets/icons/Clear_night.png');
  }

  return icon;
}

const defineWeatherIcon = (iconCode) => {
  let icon = constants.ICONS.SUN;
  if (iconCode >= 1 && iconCode < 7) {
    icon = constants.ICONS.SUN;
  } else if (iconCode >= 7 && iconCode < 12) {
    icon = constants.ICONS.CLOUD;
  } else if (iconCode >= 12 && iconCode < 15 || iconCode >= 40 && iconCode < 43) {
    icon = constants.ICONS.RAIN;
  } else if (iconCode >= 15 && iconCode < 19) {
    icon = constants.ICONS.LIGHTNING;
  } else if (iconCode >= 19 && iconCode < 25 || iconCode >= 43 && iconCode < 45) {
    icon = constants.ICONS.SNOW;
  } else if (iconCode >= 25 && iconCode < 31) {
    icon = constants.ICONS.LIGHTNING;
  } else if (iconCode >= 33) {
    icon = constants.ICONS.MOON;
  } 

  return icon;
}

const useWeatherImage = () => {
  const getWeatherImage = (iconCode) => {
    return defineWeatherImage(iconCode);
  }

  const getWeatherIcon = (iconCode) => {
    return defineWeatherIcon(iconCode);
  }

  return {
    getWeatherImage,
    getWeatherIcon,
  };

}

export default useWeatherImage;