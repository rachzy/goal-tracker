import { Pressable, Text, StyleSheet, View } from "react-native";

interface IProps {
  children: string;
  backgroundColor?: string;
  onPress?: () => void;
}

const DefaultButton: React.FC<IProps> = ({
  onPress,
  backgroundColor,
  children,
}) => {
  return (
    <Pressable
      android_ripple={{ color: "rgba(0, 0, 0, 0.7)" }}
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View
        style={[
          styles.defaultButton,
          { backgroundColor: backgroundColor || "rgba(128, 255, 0, 0.8)" },
        ]}
      >
        <Text style={styles.defaultButtonLabel}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    margin: 10,
  },
  defaultButtonLabel: {
    color: "white",
    fontWeight: "900",
  },
  pressed: {
    opacity: 0.5,
  },
});

export default DefaultButton;
