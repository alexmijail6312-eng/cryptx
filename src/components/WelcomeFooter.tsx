import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onPress?: () => void;
};

export default function WelcomeFooter({ onPress }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jump start your{"\n"}crypto portfolio</Text>
      <Text style={styles.subtitle}>
        Take your investment portfolio{"\n"}to next level
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.85}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
    lineHeight: 44,
    color: "#FFFFFF",
  },
  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 22,
    color: "#FFFFFF",
    marginTop: 12,
  },
  button: {
    backgroundColor: "#6C4DFF",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 32,
    shadowColor: "#6C4DFF",
    shadowOpacity: 0.5,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  buttonText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
});
