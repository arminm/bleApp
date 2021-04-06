import * as React from "react";
import { StyleSheet } from "react-native";
import { TriangleColorPicker } from "react-native-color-picker";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
      <TriangleColorPicker
        defaultColor={{ h: 5, s: 5, v: 1 }}
        // onColorChange={(color) => console.log(`Color selected`, { color })}
        onColorSelected={(color) => console.log(`Color selected`, { color })}
        style={{ width: 200, height: 200 }}
      />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
