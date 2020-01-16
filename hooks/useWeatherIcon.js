import { useState } from "react";

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

const useWeatherImage = () => {
  const [weatherIcon, setWeatherIcon] = useState(null);

  const getWeatherImage = (iconCode) => {
    return defineWeatherImage(iconCode);
  }

  return {
    getWeatherImage,
    weatherIcon,
  };

}

export default useWeatherImage;