import { FC } from "react";
import { NasaApiResponse } from "../../types";
import { Text, StyleSheet, View,  Button } from "react-native";

const PostImage: FC<NasaApiResponse> = ({ title, date }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View>
        <Text>{date}</Text>
        <Button title="View" />
      </View>
    </View>
  );
};
export default PostImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  content: {},
  title: {
    color: "white",
    fontSize: 15,
    marginBottom: 18,
  },
});
