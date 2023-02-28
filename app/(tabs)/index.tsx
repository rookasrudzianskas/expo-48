import { StyleSheet, FlatList, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Array(12).fill(0)}
        renderItem={() => <View style={styles.box} />}
        numColumns={3}
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    backgroundColor: 'azure',
    borderColor: 'aqua',
    borderWidth: 1,

    flex: 1,
    aspectRatio: 1,
  },
});
