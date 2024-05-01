import EditScreenInfo from "@/components/EditScreenInfo";
import { Text } from "@/components/Themed";
import { View } from "@/components/Themed";
import { Link } from "expo-router";
import { Button, StyleSheet } from "react-native";

export default function HomeTestPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>(home)/awesome</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Link href={"/(tabs)/(home)/users/1"} asChild>
        <Button title="/(tabs)/(home)/users/1" color={"green"} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
