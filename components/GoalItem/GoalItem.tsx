import { StyleSheet, Text, View } from "react-native";
import DefaultButton from "../DefaultButton/DefaultButton";

import { IGoal } from "../../App";

interface IProps {
  goal: IGoal;
  handleOpenGoal: (goal: IGoal) => void;
  handleSetGoalAsCompleted: (goal: IGoal) => void;
  handleRemoveGoal: (goal: IGoal) => void;
}

const GoalItem: React.FC<IProps> = ({
  goal,
  handleOpenGoal,
  handleRemoveGoal,
  handleSetGoalAsCompleted,
}) => {
  return (
    <View style={styles.goalContainer}>
      <View style={{ maxWidth: "50%" }}>
        <Text style={styles.goalTitle}>{goal.title}</Text>
        <Text style={styles.goalDescription}>{goal.description}</Text>
      </View>
      <View>
        {!goal.completed ? (
          <DefaultButton onPress={handleSetGoalAsCompleted.bind(this, goal)}>
            Set as Completed
          </DefaultButton>
        ) : (
          <DefaultButton
            onPress={handleRemoveGoal.bind(this, goal)}
            backgroundColor="red"
          >
            Remove Goal
          </DefaultButton>
        )}
        <DefaultButton onPress={handleOpenGoal.bind(this, goal)} backgroundColor="#5e0acc">Open Goal</DefaultButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "chartreuse",
    margin: 4,
    minHeight: 150,
    borderRadius: 10,
  },
  goalTitle: {
    color: "chartreuse",
    fontSize: 22,
  },
  goalDescription: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
  },
});

export default GoalItem;
