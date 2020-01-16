import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Feather} from '@expo/vector-icons'
import constants from '../constants';
import Animated from 'react-native-reanimated';
import useWeather from '../hooks/useWeather';
import useDate from '../hooks/useDate';
import useWeatherImage from '../hooks/useWeatherIcon';
import useColors from '../hooks/useColors';

const Forecast = ({ forecastOpacity, forecastY }) => {
  const { forecastForWeek } = useWeather();
  const { getDay } = useDate();
  const { getWeatherIcon } = useWeatherImage();
  const { color } = useColors();

  return (
    <Animated.View style={{
      ...styles.container,
      opacity: forecastOpacity,
      transform: [{
        translateY: forecastY
      }]
    }}>
      {
        forecastForWeek.map((day, index) => (
          <View key={index} style={{ ...styles.item }}>
            <Text style={{ ...styles.day, color }}>{getDay(day.Date)}</Text>
            <Feather name={getWeatherIcon(day.Day.Icon)} size={22} color={constants.COLORS.SIMPLE.GRAY} />
            <Text style={{ ...styles.temperature, color }}>{Math.round(day.Temperature.Minimum.Value)}° / {Math.round(day.Temperature.Maximum.Value)}°</Text>
          </View>
        ))
      }
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  
  item: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: constants.COLORS.SIMPLE.GRAY
  },

  day: {
    fontSize: 16,
  },

  temperature: {
    fontSize: 16,
  }
});

export default Forecast;