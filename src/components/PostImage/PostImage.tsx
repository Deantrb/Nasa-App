import { FC } from "react";
import { NasaApiResponse, RootStackParams } from "../../types";
import { Text, StyleSheet, View, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Detail"
>;

const PostImage: FC<NasaApiResponse> = ({ title, date, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const hanldeViewDetail = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.btnContainer}>
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
export default PostImage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "rgba(18,39,113,255)",
    padding: 15,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
