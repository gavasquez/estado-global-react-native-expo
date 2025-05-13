import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useCounterStore } from '../../store/counter-store';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export const SettingsScreen = () => {
  const count = useCounterStore( state => state.count );
  const increaseBy = useCounterStore( state => state.increment );
  const navigation = useNavigation();
  useEffect( () => {
    navigation.setOptions( {
      title: `Count: ${ count }`,
    } );
  }, [ count ] );

  return (
    <View style={ styles.container }>
      <Text>Count: { count }</Text>
      <Pressable style={ styles.primaryButton } onPress={ () => increaseBy( 1 ) }>
        <Text>Increment</Text>
      </Pressable>
      <Pressable style={ styles.primaryButton } onPress={ () => {
        if ( count < 1 ) return;
        increaseBy( -1 );
      } }>
        <Text>Decrement</Text>
      </Pressable>
    </View>
  );
};