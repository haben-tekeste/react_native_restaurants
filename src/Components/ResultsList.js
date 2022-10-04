import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetails from "./ResultDetails";

const ResultsList = ({ title, results }) => {
  if (!results.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
