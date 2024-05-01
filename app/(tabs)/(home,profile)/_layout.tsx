import { Stack, useSegments } from "expo-router";

export default function Shared1Layout() {
  const segements = useSegments();

  console.log(segements);

  if (segements.at(1) === "(home)") {
    return (
      <Stack>
        <Stack.Screen name="(home)/index" />
        <Stack.Screen name="users/[id]" />
      </Stack>
    );
  }

  if (segements.at(1) === "(profile)") {
    return (
      <Stack>
        <Stack.Screen name="(profile)/profile/index" />
        <Stack.Screen name="(profile)/profile/settings" />
        <Stack.Screen name="users/[id]" />
      </Stack>
    );
  }

  return null;
}
