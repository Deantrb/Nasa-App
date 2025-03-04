import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import Routes from "./src/routes/Routes";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
