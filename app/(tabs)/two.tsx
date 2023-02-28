import {StyleSheet, TouchableOpacity} from 'react-native';
import { Image } from 'expo-image';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useNavigation } from 'expo-router';
import React, {useLayoutEffect, useState} from "react";
import { FlatList } from 'react-native';

export default function TabTwoScreen() {
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const [seed, setSeed] = useState(696)

  return (
    <FlatList
      data={Array(120).fill(0)}
      renderItem={({ index }) => (
        <Image
          style={styles.image}
          contentFit="cover"
          source={`https://picsum.photos/seed/${index}/720`}
        />
      )}
      numColumns={3}
      contentContainerStyle={{ gap: 20 }}
      columnWrapperStyle={{ gap: 10 }}
    />
    // <TouchableOpacity onPress={() => setSeed(seed + 1)} style={styles.container}>
    //   <Text style={styles.title}>Tab Two</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <Image
    //     style={styles.image}
    //     source={`https://picsum.photos/seed/${seed}/3000/2000`}
    //     placeholder={blurhash}
    //     contentFit="cover"
    //     transition={1000}
    //   />
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
