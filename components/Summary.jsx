import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Feather} from '@expo/vector-icons'
import constants from '../constants';
import Animated from 'react-native-reanimated';
import { useSafeArea } from 'react-native-safe-area-context';
import useWeather from '../hooks/useWeather';

const getContainerStyles = (isAbsolute, insets) => {
  return {
    position: isAbsolute ? 'absolute' : 'relative',
    top: isAbsolute ? insets.top + 30 : 0,
    ...styles.container,
  }
};

const getHourStyles = (isAbsolute) => {
  return {
    color: isAbsolute ? 'black' : constants.COLORS.SIMPLE.MORNING,
    ...styles.hour
  }
};

const getTemperatureStyles = (isAbsolute) => {
  return {
    color: isAbsolute ? 'black' : constants.COLORS.SIMPLE.MORNING,
    ...styles.temperature
  }
};

const Summary = ({ summaryOpacity, summaryY, isAbsolute = true }) => {
  const insets = useSafeArea();
  const { forecastByHour } = useWeather();

  return (
    <Animated.View style={{
      ...styles.container,
      ...getContainerStyles(isAbsolute, insets),
      opacity: summaryOpacity,
      transform: [{ translateY: summaryY }]
    }}>
      {
        forecastByHour.map((hour, index) => (
          <View style={{...styles.element}}>
            <Text style={{...getHourStyles(isAbsolute)}}>Now</Text>
            <Feather name={constants.ICONS.CLOUD} size={22} color={isAbsolute ? 'black' : constants.COLORS.SIMPLE.GRAY} />
            <Text style={{ ...getTemperatureStyles(isAbsolute) }}>{hour.Temperature.Value}</Text>
          </View>
        ))
      }
      <View style={{...styles.element}}>
        <Text style={{...getHourStyles(isAbsolute)}}>Now</Text>
        <Feather name={constants.ICONS.CLOUD} size={22} color={isAbsolute ? 'black' : constants.COLORS.SIMPLE.GRAY} />
        <Text style={{...getTemperatureStyles(isAbsolute)}}>1°</Text>
      </View>
      <View style={{...styles.element}}>
        <Text style={{...getHourStyles(isAbsolute)}}>21</Text>
        <Feather name={constants.ICONS.SUN} size={22} color={isAbsolute ? 'black' : constants.COLORS.SIMPLE.GRAY} />
        <Text style={{...getTemperatureStyles(isAbsolute)}}>2°</Text>
      </View>
      <View style={{...styles.element}}>
        <Text style={{...getHourStyles(isAbsolute)}}>22</Text>
        <Feather name={constants.ICONS.RAIN} size={22} color={isAbsolute ? 'black' : constants.COLORS.SIMPLE.GRAY} />
        <Text style={{...getTemperatureStyles(isAbsolute)}}>3°</Text>
      </View>
      <View style={{...styles.element}}>
        <Text style={{...getHourStyles(isAbsolute)}}>23</Text>
        <Feather name={constants.ICONS.LIGHTNING} size={22} color={isAbsolute ? 'black' : constants.COLORS.SIMPLE.GRAY} />
        <Text style={{...getTemperatureStyles(isAbsolute)}}>-3°</Text>
      </View>
      <View style={{...styles.element}}>
        <Text style={{...getHourStyles(isAbsolute)}}>24</Text>
        <Feather name={constants.ICONS.FOG} size={22} color={isAbsolute ? 'black' : constants.COLORS.SIMPLE.GRAY} />
        <Text style={{...getTemperatureStyles(isAbsolute)}}>-1°</Text>
      </View>
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