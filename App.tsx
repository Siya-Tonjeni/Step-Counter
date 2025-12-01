import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type ValueDataProps = {
  label: string;
  value: string;
};

const ValueData = ({label, value}: ValueDataProps) => (
  <View style={styles.valueContainer}>
  <Text style={styles.label}>{label}</Text>
  <Text style={styles.value}>{value}</Text>
</View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>

      <View style={{flexDirection: 'row'}}>
        <ValueData label="Steps" value="129" />
        <ValueData label="Distance" value="1.2 km" />
      </View>

      <ValueData label="Flights Climbed" value="0.4 km" />
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

  valueContainer: {
    marginRight: 50,
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    color: '#f3f3f3',
  },
  value: {
    fontSize: 35,
    color: '#AFB3B3',
    fontWeight: '500',
  },
});
