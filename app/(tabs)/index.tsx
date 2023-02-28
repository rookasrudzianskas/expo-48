import { StyleSheet, FlatList, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  box: {
    backgroundColor: 'azure',
    borderColor: 'aqua',
    borderWidth: 1,

    width: 150,
    height: 150,
  },
});
