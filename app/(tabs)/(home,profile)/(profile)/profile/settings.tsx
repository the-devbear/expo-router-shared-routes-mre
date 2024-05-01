import EditScreenInfo from "@/components/EditScreenInfo";
import { Text } from "@/components/Themed";
import { View } from "@/components/Themed";
import { Link } from "expo-router";
import { Button, StyleSheet } from "react-native";
export default function ProfileSettingsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>(profile)/index</Text>
      <Link href={"/(tabs)/(profile)/users/1"} asChild>
        <Button title="Go to user 1" />
      </Link>
      <Link href={"/(tabs)/(profile)/(home)/awesome"} asChild>
        <Button title="Go to Home inside Profile" />
      </Link>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
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
