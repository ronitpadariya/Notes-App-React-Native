import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListNotesScreen from "./src/screens/ListNotesScreen";
import { NotesProvider } from "./src/context/NotesContext";
import { CreateNotesScreen } from "./src/screens/CreateNoteScreen";
import { ShowNote } from "./src/screens/ShowNoteScreen";
import { EditNoteScreen } from "./src/screens/EditNotesScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="notes"
          component={ListNotesScreen}
          options={{
            headerTitleAlign: "center",
            title: "All Notes",
          }}
        />
        <Stack.Screen
          name="create"
          component={CreateNotesScreen}
          options={{
            headerTitleAlign: "center",
            title: "Create Note",
          }}
        />
        <Stack.Screen
          name="show"
          component={ShowNote}
          options={{
            headerTitleAlign: "center",
            title: "Note",
          }}
        />
        <Stack.Screen
          name="edit"
          component={EditNoteScreen}
          options={{
            headerTitleAlign: "center",
            title: "Update Note",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <NotesProvider value={10}>
      <App />
    </NotesProvider>
  );
};
