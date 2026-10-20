import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeroImage from "../components/HeroImage";
import WelcomeFooter from "../components/WelcomeFooter";

export default function Index() {
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <HeroImage />
      <WelcomeFooter onPress={() => Alert.alert("CryptX", "¡Bienvenido!")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0A0A" },
});
