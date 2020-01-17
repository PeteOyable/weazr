import React from 'react';
import { StyleSheet, Text, Dimensions, View, Image } from 'react-native';
import constants from '../constants';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated'
import Forecast from './Forecast';
import Summary from './Summary';
import Svg, { Defs, ClipPath, Path, Rect } from 'react-native-svg';
import useColors from '../hooks/useColors';

const { height, width } = Dimensions.get('window');

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedPath = Animated.createAnimatedComponent(Path);

const Informations = ({ gestureHandler, constrainedY, summaryOpacity, summaryY, forecastOpacity, forecastY, panPath }) => {
  const { color } = useColors();

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View style={[
        styles.panContainer,
        {
          transform: [
            { translateY: constrainedY }]
        }]
      }>
        <AnimatedSvg style={{...styles.svg}} height={50} width={width}>
          <Defs>
            <ClipPath id="clipPath">
              <AnimatedPath d={panPath} />
            </ClipPath>
          </Defs>
          <Rect
            clipPath="url(#clipPath)"
            fill={constants.COLORS.SIMPLE.WHITE}
            width={width}
            height={50}
          />
        </AnimatedSvg>
        <Animated.View style={{ ...styles.forecastContainer }}>
            <View style={{...styles.cityContainer}}>
              <Text style={{ ...styles.city, color }}>MONTRÉAL</Text>
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
    position: 'relative',
    height: height,
  },

  svg: {
    ...StyleSheet.absoluteFill,
    top: -50
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
  },
})

export default React.memo(Informations);