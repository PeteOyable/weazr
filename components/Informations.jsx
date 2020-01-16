import React from 'react';
import { StyleSheet, Text, Dimensions, View, Image } from 'react-native';
import constants from '../constants';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated'
import Forecast from './Forecast';
import Summary from './Summary';

const { height } = Dimensions.get('window');

const Informations = ({ gestureHandler, constrainedY, paddingForecast, summaryOpacity, summaryY, forecastOpacity, forecastY }) => {
  const panGesture = React.createRef();
  const tabGesture = React.createRef();

  return (
    <PanGestureHandler
      ref={panGesture}
      simultaneousHandlers={tabGesture}
      maxPointers={1}
      minDist={10}
      waitFor={tabGesture}
      {...gestureHandler}
    >
      <Animated.View style={[
        styles.panContainer,
        {
          transform: [
            { translateY: constrainedY }]
        }]
      }>
        <Animated.View style={{ ...styles.forecastContainer, paddingTop: paddingForecast }}>
          <View style={{...styles.cityContainer}}>
            <Text style={{ ...styles.city }}>MONTRÉAL</Text>
          </View>
          <Summary
            isAbsolute={false}
            summaryOpacity={summaryOpacity}
            summaryY={summaryY}
          />
          <Forecast
            forecastOpacity={forecastOpacity}
            forecastY={forecastY}
          />
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  panContainer: {
    backgroundColor: constants.COLORS.SIMPLE.WHITE,
    height: height,
  },

  forecastContainer: {
    flex: 1,
  },

  cityContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  city: {
    fontSize: 20,
    fontWeight: 'bold',
    color: constants.COLORS.SIMPLE.MORNING,
  },
})

export default React.memo(Informations);