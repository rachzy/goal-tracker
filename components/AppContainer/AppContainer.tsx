import { SafeAreaView, StyleSheet } from "react-native";

interface IProps {
  children: React.ReactNode;
  centered?: boolean;
}

const AppContainer: React.FC<IProps> = ({ children, centered }) => {
  return (
    <SafeAreaView
      style={[styles.appContainer, centered ? styles.centered : {}]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#111",
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppContainer;
