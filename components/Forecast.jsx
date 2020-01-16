import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Feather} from '@expo/vector-icons'
import constants from '../constants';
import Animated from 'react-native-reanimated';

const Forecast = ({forecastOpacity, forecastY}) => {
  return (
    <Animated.View style={{
      ...styles.container,
      opacity: forecastOpacity,
      transform: [{
        translateY: forecastY
      }]
    }}>
      <View style={{ ...styles.item }}>
        <Text style={{...styles.day}}>Monday</Text>
        <Feather name={constants.ICONS.SNOW} size={22} color={constants.COLORS.SIMPLE.GRAY} />
        <Text style={{...styles.temperature}}>2° / -5°</Text>
      </View>
      <View style={{ ...styles.item }}>
        <Text style={{...styles.day}}>Monday</Text>
        <Feather name={constants.ICONS.SNOW} size={22} color={constants.COLORS.SIMPLE.GRAY} />
        <Text style={{...styles.temperature}}>2° / -5°</Text>
      </View>
      <View style={{ ...styles.item }}>
        <Text style={{...styles.day}}>Monday</Text>
        <Feather name={constants.ICONS.SNOW} size={22} color={constants.COLORS.SIMPLE.GRAY} />
        <Text style={{...styles.temperature}}>2° / -5°</Text>
      </View>
      <View style={{ ...styles.item }}>
        <Text style={{...styles.day}}>Monday</Text>
        <Feather name={constants.ICONS.SNOW} size={22} color={constants.COLORS.SIMPLE.GRAY} />
        <Text style={{...styles.temperature}}>2° / -5°</Text>
      </View>
      <View style={{ ...styles.item }}>
        <Text style={{...styles.day}}>Monday</Text>
        <Feather name={constants.ICONS.SNOW} size={22} color={constants.COLORS.SIMPLE.GRAY} />
        <Text style={{...styles.temperature}}>2° / -5°</Text>
      </View>
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
    color: constants.COLORS.SIMPLE.MORNING,
    fontSize: 16,
  },

  temperature: {
    color: constants.COLORS.SIMPLE.MORNING,
    fontSize: 16,
  }
});

export default Forecast;