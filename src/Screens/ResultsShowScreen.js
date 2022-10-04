import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  console.log(navigation.getParam("id"));
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const fetchResult = async () => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <View>
      {result && (
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image source={{ uri: item }} style={styles.img} />;
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 300,
    marginVertical: 5,
  },
});

export default ResultsShowScreen;
