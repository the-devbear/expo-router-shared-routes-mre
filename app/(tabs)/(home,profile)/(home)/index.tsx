import EditScreenInfo from "@/components/EditScreenInfo";
import { Text } from "@/components/Themed";
import { View } from "@/components/Themed";
import { Link } from "expo-router";
import { Button, StyleSheet } from "react-native";

export default function Home1IndexPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>(home)/index</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Link href={"/(tabs)/(home)/users/1"} asChild>
        <Button title="/(tabs)/(home)/users/1" color={"green"} />
      </Link>
      <Link href={"/(tabs)/(home)/awesome"} asChild>
        <Button title="/(tabs)/(home)/awesome" color={"green"} />
      </Link>
      {/* I don't think this should be possible */}
      <Link href={"/(tabs)/(profile)/(home)/awesome"} asChild>
        <Button title="/(tabs)/(profile)/(home)/awesome" color={"orange"} />
      </Link>
      {/* This should navigate to the profile tab and the index of it */}
      <Link href={"/(tabs)/(profile)/(profile)/profile"}>
        <Button title="/(tabs)/(profile)/(profile)/profile" color={"red"} />
      </Link>
      {/* This should route to the profile tab and then to settings */}
      <Link href={"/(tabs)/(profile)/(profile)/profile/settings"}>
        <Button
          title="/(tabs)/(profile)/(profile)/profile/settings"
          color={"red"}
        />
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
  error: {
    color: "red",
  },
});
