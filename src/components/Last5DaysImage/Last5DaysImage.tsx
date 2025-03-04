import { FC } from "react";
import { NasaApiResponse } from "../../types";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import PostImage from "../PostImage/PostImage";


const Last5DaysImage: FC<{ last5Days: NasaApiResponse[] }> = ({
  last5Days,
}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 days</Text>
      <ScrollView style={styles.content}>
        {last5Days.map((item, index) => (
          <PostImage key={index} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};
export default Last5DaysImage;

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
