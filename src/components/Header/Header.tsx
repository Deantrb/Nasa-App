import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../../../assets/nasa-logo.png")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
});
