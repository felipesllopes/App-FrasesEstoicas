import { StyleSheet, View } from 'react-native';
import Principal from './src/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Principal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
