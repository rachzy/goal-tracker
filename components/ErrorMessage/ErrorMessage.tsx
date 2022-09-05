import { StyleSheet, Text } from "react-native";

interface IProps {
  children: string;
}

const ErrorMessage: React.FC<IProps> = ({ children }) => {
  return <Text style={styles.errorLabel}>{children}</Text>;
};

const styles = StyleSheet.create({
  errorLabel: {
    color: "red",
  },
});

export default ErrorMessage;
