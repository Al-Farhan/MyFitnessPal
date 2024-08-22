import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Food item view */}
      <View
        style={{
          backgroundColor: "gainsboro",
          padding: 10,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <View style={{ flex: 1, gap: 5 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Pizza Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, modi. Accusamus iste nesciunt debitis maiores asperiores sapiente, dolorem magni! Temporibus? </Text>
          <Text style={{ color: "dimgray" }}>350 cal, Dominos</Text>
        </View>
        <AntDesign name="pluscircleo" size={24} color="royalblue" />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
});
