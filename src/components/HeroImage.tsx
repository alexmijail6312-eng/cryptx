import { Image, StyleSheet, Text, View } from "react-native";

export default function HeroImage() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Crypt<Text style={styles.logoAccent}>X</Text>
      </Text>

      <Image
        source={require("../../assets/Shape.png")}
        style={styles.shape}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  logo: {
    fontFamily: "Poppins_700Bold",
    fontSize: 56,
    color: "#FFFFFF",
    marginTop: 24,
  },
  logoAccent: {
    color: "#6C4DFF",
  },
  shape: {
    flex: 1,
    width: "110%",
    alignSelf: "center",
    marginTop: 16,
  },
});
