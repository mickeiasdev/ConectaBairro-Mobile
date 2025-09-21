import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme';

import HomeScreen from '../tela/Home';
import PlaceholderScreen from '../tela/Placeholder';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Vagas') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Prestadores') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Notificações') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Configurações') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary500,
        tabBarInactiveTintColor: colors.gray300,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
        }
      })}
    >
      <Tab.Screen name="Vagas" component={HomeScreen} />
      <Tab.Screen name="Prestadores" component={PlaceholderScreen} initialParams={{ title: 'Prestadores' }}/>
      <Tab.Screen name="Notificações" component={PlaceholderScreen} initialParams={{ title: 'Notificações' }} />
      <Tab.Screen name="Configurações" component={PlaceholderScreen} initialParams={{ title: 'Configurações' }} />
    </Tab.Navigator>
  );
}

