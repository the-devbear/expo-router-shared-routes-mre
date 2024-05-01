import EditScreenInfo from "@/components/EditScreenInfo";
import { Text } from "@/components/Themed";
import { View } from "@/components/Themed";
import { Link } from "expo-router";
import { Button, StyleSheet } from "react-native";

export default function Profile1Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>(profile)/index</Text>
      <Link href={"/(tabs)/(profile)/users/1"} asChild>
        <Button title="/(tabs)/(profile)/users/1" color={"green"} />
      </Link>
      {/* This works fine just looks weird, I would have thought that it can be /(tabs)/(profile)/profile/settings */}
      <Link href={"/(tabs)/(profile)/(profile)/profile/settings"} asChild>
        <Button
          title="/(tabs)/(profile)/(profile)/profile/settings"
          color={"green"}
        />
      </Link>
      {/* Also makes sense how it routes, I just think this should not be possible */}
      <Link href={"/(tabs)/(profile)/(home)/awesome"} asChild>
        <Button title="/(tabs)/(profile)/(home)/awesome" color={"orange"} />
      </Link>
      {/* Behaves as expected, since can't resolve /(tabs)/(profile)/profile/settings since the route doesn't exist */}
      <Link href={"/(tabs)/(profile)/profile/settings"} asChild>
        <Button title="/(tabs)/(profile)/profile/settings" color={"orange"} />
      </Link>
      {/* Same as Above*/}
      <Link href={"/(tabs)/(profile)/profile/settings"} asChild>
        <Button title="/(tabs)/(profile)/profile/settings" color={"orange"} />
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
