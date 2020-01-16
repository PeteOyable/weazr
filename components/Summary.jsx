import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Feather} from '@expo/vector-icons'
import constants from '../constants';
import Animated from 'react-native-reanimated';
import { useSafeArea } from 'react-native-safe-area-context';
import useWeather from '../hooks/useWeather';
import useDate from '../hooks/useDate';
import useWeatherImage from '../hooks/useWeatherIcon';
import useColors from '../hooks/useColors';

const getContainerStyles = (isAbsolute, insets) => {
  return {
    position: isAbsolute ? 'absolute' : 'relative',
    top: isAbsolute ? insets.top + 30 : 0,
    ...styles.container,
  }
};

const getHourStyles = (isAbsolute, color) => {
  return {
    color: isAbsolute ? constants.COLORS.SIMPLE.WHITE : color,
    ...styles.hour
  }
};

const getTemperatureStyles = (isAbsolute, color) => {
  return {
    color: isAbsolute ? constants.COLORS.SIMPLE.WHITE : color,
    ...styles.temperature
  }
};

const Summary = ({ summaryOpacity, summaryY, isAbsolute = true }) => {
  const insets = useSafeArea();
  const { forecastByHour } = useWeather();
  const { getHour } = useDate();
  const { getWeatherIcon } = useWeatherImage();
  const { color } = useColors();

  return (
    <Animated.View style={{
      ...styles.container,
      ...getContainerStyles(isAbsolute, insets),
      opacity: summaryOpacity,
      transform: [{ translateY: summaryY }]
    }}>
      {
        forecastByHour.map((hour, index) => (
          <View key={index} style={{...styles.element}}>
            <Text style={{ ...getHourStyles(isAbsolute, color) }}>{getHour(hour.DateTime)}</Text>
            <Feather name={getWeatherIcon(hour.WeatherIcon)} size={22} color={isAbsolute ? constants.COLORS.SIMPLE.WHITE : constants.COLORS.SIMPLE.GRAY} />
            <Text style={{ ...getTemperatureStyles(isAbsolute, color) }}>{Math.round(hour.Temperature.Value)}°</Text>
          </View>
        ))
      }
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-around',
    width: '100%',
  },

  element: {
    alignItems: 'center'
  },

  hour: {
    fontSize: 14,
    marginBottom: 5
  },

  temperature: {
    fontSize: 16,
    marginTop: 10
  }
});

export default Summary;