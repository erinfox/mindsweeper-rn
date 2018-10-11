import React, { Component } from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Cell from "../components/cells";

export default class Board extends React.Component<props> {
  render = () => {
    // const {  } = this.props;
    return (
      <View style={styles.container}>
        <Cell />
      </View>
    );
  };
}

const styles = EStyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  }
});
