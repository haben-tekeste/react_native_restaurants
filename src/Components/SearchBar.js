import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ input, onInputChange, onInputSubmit }) => {
  return (
    <View style={styles.bg}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={input}
        onChangeText={onInputChange}
        onEndEditing={() => onInputSubmit(input)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#e1dede",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 7,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 6,
  },
  input: {
    flex: 1,
    fontSize: 19,
  },
  icon: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 5,
  },
});

export default SearchBar;
