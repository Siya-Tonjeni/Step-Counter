import { StyleSheet, Text, View } from 'react-native';

type ValueDataProps = {
    label: string;
    value: string;
  };
  
  const ValueData = ({label, value}: ValueDataProps) => (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );


const styles = StyleSheet.create({
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
  

  export default ValueData;