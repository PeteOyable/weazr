import Animated from 'react-native-reanimated'
import { onGestureEvent, spring } from 'react-native-redash';
import { State } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const {
  add,
  block,
  cond,
  eq,
  lessOrEq,
  set,
  sub,
  Value,
  Clock,
  stopClock,
  defined,
  interpolate,
  Extrapolate,
  neq
} = Animated;

const { height } = Dimensions.get('screen');
const SNAP_POINTS = [height * 0.25, height * 0.60];

const useAnimation = () => {
  const config = {
    damping: 20,
    mass: 1,
    stiffness: 130,
    overshootClamping: false,
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
  };

  const START = SNAP_POINTS[0];
  const END = SNAP_POINTS[SNAP_POINTS.length - 1];
  const PAN_MARGIN_TOP = 20;

  const translationY = new Value(0);
  const state = new Value(State.UNDETERMINED);
  const velocityY = new Value(0);
  const offsetY = new Value(START);
  const transY = new Value(START);
  const clock = new Clock();
  
  const gestureHandler = onGestureEvent({
    translationY,
    state,
    velocityY
  });

  const snapPoint = cond(
    lessOrEq(transY, height * 0.5),
    START,
    END
  );

  const translateY =
    cond(
      eq(state, State.ACTIVE),
      block([
        stopClock(clock),
        set(transY, add(transY, sub(translationY, offsetY))),
        set(offsetY, translationY),
        transY,
      ]),
      block([
        cond(
          neq(state, State.UNDETERMINED),
          block([
            set(offsetY, 0),
            set(
              transY,
              cond(
                defined(transY),
                spring({ clock, velocity: velocityY, from: transY, to: snapPoint, config }),
                transY
              ),
            ),
          ]),
          block([
            set(offsetY, 0),
            set(
              transY,
              spring({ clock, velocity: velocityY, from: END, to: END, config }),
            )
          ])
        )
      ])
    )

  const constrainedY = interpolate(translateY, {
    inputRange: [START, END],
    outputRange: [START, END],
    extrapolate: Extrapolate.CLAMP
  });

  const gradientHeight = interpolate(translateY, {
    inputRange: [START, END],
    outputRange: [START, END],
    extrapolate: Extrapolate.CLAMP
  });

  const gradientY = interpolate(translateY, {
    inputRange: [START, END],
    outputRange: [-START - PAN_MARGIN_TOP, -PAN_MARGIN_TOP],
    extrapolate: Extrapolate.CLAMP
  });

  const weatherY = interpolate(translateY, {
    inputRange: [START, END],
    outputRange: [60, 0],
    extrapolate: Extrapolate.CLAMP
  });
  
  const iconScale = interpolate(translateY, {
    inputRange: [START, END],
    outputRange: [0.5, 1],
    extrapolate: Extrapolate.CLAMP
  });

  const iconOpacity = interpolate(translateY, {
    inputRange: [START, START + 100, END],
    outputRange: [0, 0, 1],
    extrapolate: Extrapolate.CLAMP
  });

  const temperatureY = interpolate(translateY, {
    inputRange: [START, END],
    outputRange: [30, 0],
    extrapolate: Extrapolate.CLAMP
  });

  const temperatureOpacity = interpolate(translateY, {
    inputRange: [START, START + 100, END],
    outputRange: [0, 0, 1],
    extrapolate: Extrapolate.CLAMP
  });

  const paddingForecast = interpolate(translateY, {
    inputRange: [START, END],
    outputRange: [30, 0],
    extrapolate: Extrapolate.CLAMP
  });

  const summaryOpacity = interpolate(temperatureOpacity, {
    inputRange: [0, 0.1, 1],
    outputRange: [1, 0, 0],
    extrapolate: Extrapolate.CLAMP
  });

  const summaryY = interpolate(translateY, {
    inputRange: [START, END],
    outputRange: [40, -10],
    extrapolate: Extrapolate.CLAMP
  });

  const summary2Opacity = interpolate(summaryOpacity, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP
  });

  const summary2Y = interpolate(translateY, {
    inputRange: [START, END],
    outputRange: [-20, 20],
    extrapolate: Extrapolate.CLAMP
  });

  const forecastOpacity = interpolate(translateY, {
    inputRange: [START, END],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP
  });

  const forecastY = interpolate(translateY, {
    inputRange: [-20, 20],
    outputRange: [0, -60],
    extrapolate: Extrapolate.CLAMP
  });

  return {
    gestureHandler,
    constrainedY,
    gradientHeight,
    gradientY,
    weatherY,
    iconScale,
    iconOpacity,
    temperatureY,
    temperatureOpacity,
    paddingForecast,
    summaryOpacity,
    summaryY,
    summary2Opacity,
    summary2Y,
    forecastOpacity,
    forecastY
  }
}

export default useAnimation;