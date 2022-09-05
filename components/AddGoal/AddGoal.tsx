import { Modal, StyleSheet, TextInput, View } from "react-native";
import DefaultButton from "../DefaultButton/DefaultButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface IProps {
  handleInputChange: (text: string) => void;
  inputValue: string;
  errorMessageState: string;
  handleCreateGoal: () => void;
}

const AddGoal: React.FC<IProps> = ({
  handleInputChange,
  inputValue,
  errorMessageState,
  handleCreateGoal,
}) => {
  return (
    <View style={styles.addGoalContainer}>
      <View style={{ flex: 2, justifyContent: "center", paddingTop: 20 }}>
        <TextInput
          style={styles.addGoalInput}
          placeholder="Your course goal..."
          placeholderTextColor={"gray"}
          onChangeText={handleInputChange}
          value={inputValue}
        />
        <ErrorMessage>{errorMessageState}</ErrorMessage>
      </View>
      <DefaultButton onPress={handleCreateGoal}>Add Goal</DefaultButton>
    </View>
  );
};

const styles = StyleSheet.create({
  addGoalContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "chartreuse",
    marginBottom: 30,
  },
  addGoalInput: {
    borderWidth: 2,
    color: "white",
    borderColor: "chartreuse",
    padding: 5,
    marginRight: 8,
  },
});

export default AddGoal;
