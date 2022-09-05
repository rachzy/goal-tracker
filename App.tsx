import { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";
import AddGoal from "./components/AddGoal/AddGoal";
import AppContainer from "./components/AppContainer/AppContainer";
import GoalItem from "./components/GoalItem/GoalItem";
import GoalScreen from "./components/GoalScreen/GoalScreen";

export interface IGoal {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface IGoalScreen {
  currentGoal: IGoal | undefined;
  visible: boolean;
}

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessageState, setErrorMessageState] = useState("");
  const [goalScreen, setGoalScreen] = useState<IGoalScreen>({
    currentGoal: undefined,
    visible: false,
  });
  const [goals, setGoals] = useState<IGoal[]>([]);

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleCreateGoal = () => {
    setErrorMessageState("");
    if (!inputValue) return setErrorMessageState("Please fill this field.");

    setInputValue("");
    setGoals((currentValue) => {
      return [
        ...currentValue,
        {
          id: Math.floor(Math.random() * 999999),
          title: inputValue,
          description: "bla bla bla",
          completed: false,
        },
      ];
    });
  };

  const handleSetGoalAsCompleted = (targetGoal: IGoal) => {
    setGoals((currentValue) => {
      const filterGoals = currentValue.filter(
        (goal) => goal.id !== targetGoal.id
      );
      return [
        ...filterGoals,
        {
          ...targetGoal,
          completed: true,
        },
      ];
    });
  };

  const handleRemoveGoal = (targetGoal: IGoal) => {
    setGoals((currentValue) => {
      const filterNewGoals = currentValue.filter(
        (goal) => goal.id !== targetGoal.id
      );
      return filterNewGoals;
    });
  };

  const handleOpenGoalPage = (goal: IGoal) => {
    setGoalScreen({
      currentGoal: goal,
      visible: true,
    });
  };

  const handleCloseGoalPage = () => {
    setGoalScreen((currentValue) => {
      return {
        currentGoal: currentValue?.currentGoal,
        visible: false,
      };
    });
  };

  return (
    <AppContainer>
      <AddGoal
        errorMessageState={errorMessageState}
        handleCreateGoal={handleCreateGoal}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsLabel}>List of Goals</Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            const goal = itemData.item;
            return (
              <GoalItem
                goal={goal}
                handleOpenGoal={handleOpenGoalPage}
                handleRemoveGoal={handleRemoveGoal}
                handleSetGoalAsCompleted={handleSetGoalAsCompleted}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id.toString();
          }}
        />
      </View>
      <GoalScreen
        visibile={goalScreen?.visible}
        onClose={handleCloseGoalPage}
        goal={goalScreen?.currentGoal}
      />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 4,
  },
  goalsLabel: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default App;
