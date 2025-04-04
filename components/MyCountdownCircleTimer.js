import { StyleSheet, Text } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useMemo } from "react";

const MyCountdownCircleTimer = ({ timer }) => {
  const colorsTime = useMemo(
    () => [
      timer.duration,
      Math.round((timer.duration * 2) / 3),
      Math.round(timer.duration / 3),
      0,
    ],
    [timer.duration]
  );

  const complete = () => {
    console.log("Dlin Dlin!!!");
  };

  return (
    <CountdownCircleTimer
      key={timer.key}
      size={250}
      isPlaying={timer.playing}
      duration={timer.duration}
      colors={["#036600", "#12ff00", "#eaff00", "#ff0000"]}
      colorsTime={colorsTime}
      strokeWidth={25}
      onComplete={complete}
    >
      {({ remainingTime }) => (
        <Text style={styles.remainingTimeText}>{remainingTime}</Text>
      )}
    </CountdownCircleTimer>
  );
};

const styles = StyleSheet.create({
  remainingTimeText: {
    fontSize: 50,
  },
});

export default MyCountdownCircleTimer;
