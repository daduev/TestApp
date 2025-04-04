import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PageHeader = ({
  leftNode = null,
  rightNode = null,
  headerText = "",
  handleOnPressLeftNode = null,
  handleOnPressRightNode = null,
  rightContainerStyle = null,
  leftContainerStyle = null,
}) => {
  return (
    <View style={styles.pageHeaderContainer}>
      <Pressable
        onPress={handleOnPressLeftNode}
        style={[styles.leftItem, leftContainerStyle]}
      >
        {leftNode}
      </Pressable>
      <View style={styles.headerItem}>
        <Text style={styles.textCenter}>{headerText}</Text>
      </View>
      <View style={[styles.rightItem, rightContainerStyle]}>
        <Pressable
          onPress={handleOnPressRightNode}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "",
            },
            { padding: 10 },
          ]}
        >
          {rightNode}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#E5E7EB",
    paddingVertical: 5,
  },
  leftItem: {
    flex: 1,
    paddingLeft: 16,
  },
  rightItem: {
    flex: 1,
    paddingRight: 16,
    alignItems: "flex-end",
  },
  headerItem: {
    flex: 1,
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default PageHeader;
