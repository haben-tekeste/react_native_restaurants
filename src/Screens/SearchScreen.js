import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [results, error, searchApi] = useResults();

  if (!results.length)
    return <ActivityIndicator size="large" color="#00ff00" />;

  const fetchPriceResults = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        input={input}
        onInputChange={(newInput) => setInput(newInput)}
        onInputSubmit={(searchTerm) => searchApi(searchTerm)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultsList title="Cost Effective" results={fetchPriceResults("$")} />
        <ResultsList title="Bit Pricier" results={fetchPriceResults("$$")} />
        <ResultsList title="Big Spender" results={fetchPriceResults("$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
