import { Stack } from "expo-router";
import { TransitionPresets } from '@react-navigation/stack';
export default function Layout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}