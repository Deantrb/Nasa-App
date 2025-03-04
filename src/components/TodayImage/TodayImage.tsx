import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { NasaApiResponse, RootStackParams } from "../../types/index";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Detail"
>;

const TodayImage: FC<NasaApiResponse> = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const hanldeViewDetail = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: url }} style={styles.image}></Image>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonC}>
        <Text style={styles.date}>{date}</Text>
        <Button
          title="View"
          onPress={() => {
            hanldeViewDetail();
          }}
        />
      </View>
    </View>
  );
};
export default TodayImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 15,
    padding: 16,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  buttonC: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
