import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { StyleSheet, Text, View } from 'react-native';
import ValueData from './src/components/Value';
import RingProgress from './src/components/RingProgress';

export default function App() {
  return (
    <View style={styles.container}>
      <RingProgress progress={1} />

      <View style={styles.values}>
        <ValueData label="Steps" value="129" />
        <ValueData label="Distance" value="1.2 km" />
        <ValueData label="Flights Climbed" value="0.4 km" />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  values: {
    flexDirection: 'row', 
    gap: 25,
    flexWrap: 'wrap',
    marginTop: 100,
  },
  
});
