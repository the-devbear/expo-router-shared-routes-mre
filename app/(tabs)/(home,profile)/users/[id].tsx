import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import { useLocalSearchParams, useSegments } from "expo-router";
import { StyleSheet } from "react-native";
import { Text } from "@/components/Themed";

export default function Tabs1UsersIdPage() {
  const segements = useSegments();
  const { id } = useLocalSearchParams<"/(tabs)/(home,profile)/users/[id]">();

  const path = segements.join("/");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {path} with Id: {id}
      </Text>
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
