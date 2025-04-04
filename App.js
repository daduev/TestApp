import React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  Button,
} from "react-native";
import PageHeader from "./components/PageHeader";
import Modal from "./components/Modal";
import MyCountdownCircleTimer from "./components/MyCountdownCircleTimer";
import { useModal } from "./hooks/useModal";
import { useTimer } from "./hooks/useTimer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

export default function App() {
  const modal = useModal();
  const timer = useTimer(15);

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader
        headerText="Voice Timer"
        rightContainerStyle={styles.rightContainer}
        rightNode={<FontAwesomeIcon icon={faBars} size={25} />}
        handleOnPressRightNode={() => modal.openModal()}
      />
      <View style={styles.bodyContainer}>
        <MyCountdownCircleTimer timer={timer} />
        <Button
          title="Restart"
          onPress={() => {
            timer.startPlaying();
            timer.restart();
          }}
        />
      </View>
      <Modal modal={modal} timer={timer} />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  rightContainer: {
    flex: 1,
    paddingRight: 5,
    alignItems: "flex-end",
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
