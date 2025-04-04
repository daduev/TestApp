import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import RBSheet from "react-native-raw-bottom-sheet";

export default function Modal({ modal, timer }) {
  const [duration, setDuration] = useState(0);

  const applyButtonClick = () => {
    timer.stopPlaying();
    timer.changeDuration(duration);
    timer.restart();
    modal.refStandard.current.close();
  };

  const onModalOpen = () => {
    setDuration(String(timer.duration));
  };

  return (
    <RBSheet
      ref={modal.refStandard}
      draggable
      dragOnContent
      height={330}
      onOpen={() => onModalOpen()}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeaderContainer}>
          <TouchableOpacity
            onPress={() => modal.refStandard.current.close()}
            style={styles.modalHeaderButton}
          >
            <Text style={styles.modalHeaderButtonCancel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={applyButtonClick}
            style={[styles.modalHeaderButton]}
          >
            <Text style={styles.modalHeaderButtonDone}>Apply</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsContainer}>
          <Text style={{ fontSize: 25, paddingRight: 10 }}>Duration</Text>
          <TextInput
            value={duration}
            onChangeText={setDuration}
            style={{
              padding: 1,
              fontSize: 25,
              width: 50,
              borderBottomWidth: 1,
              borderBottomColor: "#E5E7EB",
            }}
            keyboardType="numeric"
          />
        </View>
      </View>
    </RBSheet>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalHeaderContainer: {
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalHeaderButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  modalHeaderButtonCancel: {
    fontSize: 25,
    color: "#666",
  },
  modalHeaderButtonDone: {
    fontSize: 25,
    color: "#006BFF",
  },
  settingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
});
