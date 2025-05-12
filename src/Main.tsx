import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './Presentation/navigators/BottomTabNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};