import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen2_a from './src/component/Screen2_a';
import Screen2_b from './src/component/Screen2_b';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Screen2_a/> */}
      <Screen2_b/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
