import { Modal, View, Text, Button, StyleSheet } from "react-native";
import AppContainer from "../AppContainer/AppContainer";

import { IGoal } from "../../App";

interface IProps {
  goal: IGoal | undefined;
  visibile: boolean;
  onClose: () => void;
}

const GoalScreen: React.FC<IProps> = ({ goal, visibile, onClose }) => {
  if (!goal) {
    return null;
  }
  return (
    <Modal visible={visibile} animationType="fade">
      <AppContainer centered={true}>
        <View style={styles.pageContainer}>
          <Text style={styles.title}>{goal.title}</Text>
          <Text style={styles.description}>{goal.description}</Text>
          <Button title="Go back" onPress={onClose} color="chartreuse" />
        </View>
      </AppContainer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    borderColor: "chartreuse",
    borderWidth: 2,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    height: 200,
  },
  title: {
    color: "white",
    fontSize: 22,
    margin: 10
  },
  description: {
    color: "gray",
    fontSize: 16,
    margin: 10
  }
});

export default GoalScreen;
