import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const ResultDetails = ({ result, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Results", { id: result.id })}
    >
      <View style={styles.container}>
        <Image source={{ uri: result.image_url }} style={styles.img} />
        <Text style={styles.text}>{result.name}</Text>
        <Text style={styles.details}>
          {result.rating} stars, {result.review_count} reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  img: {
    width: 230,
    borderRadius: 8,
    height: 120,
  },
  container: {
    marginLeft: 15,
  },
  details: {
    fontWeight: "light",
    color: "gray",
  },
});

export default withNavigation(ResultDetails);
