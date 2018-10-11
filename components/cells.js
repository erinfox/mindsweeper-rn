import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import GridView from "react-native-super-grid";
import { SuperGridSectionList } from "react-native-super-grid";

export default class Board extends React.Component<props> {
  render() {
    //colors
    const items = [
      { name: "nothing", code: "#95a5a6" },
      { name: "bomb", code: "#c0392b" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "flag", code: "#7f8c8d" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "flag", code: "#7f8c8d" },
      { name: "flag", code: "#7f8c8d" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "flag", code: "#7f8c8d" },
      { name: "flag", code: "#7f8c8d" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "nothing", code: "#bdc3c7" },
      { name: "flag", code: "#7f8c8d" }
    ];
    //notes from cullen
    //bombs randomly placed
    //loops over colors flips 20 coins, place a bomb
    //repeat something in js 20x
    //loop over an array, return new array with different colors

    return (
      <View style={styles.cellContainer}>
        {/* they should all start out gray */}
        <GridView
          itemDimension={20}
          items={items}
          style={styles.gridView}
          renderItem={item => (
            //add onPress here with the logic
            <TouchableOpacity
              style={[styles.itemContainer, { backgroundColor: item.code }]}
            >
              <Text style={styles.itemName} />
              <Text style={styles.itemCode} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  cellContainer: {
    height: "80%",
    width: "80%",
    backgroundColor: "grey"
  },
  gridView: {
    paddingTop: 25,
    borderWidth: 1
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600"
  }
});
