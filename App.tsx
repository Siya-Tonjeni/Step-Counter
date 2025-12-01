import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ValueData from './src/components/Value';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>

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
  },
  label: {
    fontSize: 20,
    color: '#f3f3f3',
  },
  value: {
    fontSize: 45,
    color: '#AFB3B3',
    fontWeight: '500',
  },
});
