import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import Header from "../../components/Header";

const Detail = () => {
  const {
    params: { title, url, explanation, date },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();
  console.log(url)

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.desc}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
  content: {
    flex:1,
    backgroundColor: "#2c449d",
    borderRadius: 15,
    marginVertical: 24,
    padding: 16,
  },
  explanationContainer: {
    marginVertical:15,


  },
  image: {
    width: "100%",
    height: 250,
    borderColor: "#fff",
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  date: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 10,
  },
  desc: {
    color: "#fff",
    fontSize: 15,
  },
});
