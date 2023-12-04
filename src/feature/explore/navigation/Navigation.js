import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from './routes';
import ExploreScreen from '../containers/ExploreScreen';

const Stack = createStackNavigator();

const ExploreNavigation = () => (
    <Stack.Navigator
        initialRouteName={ROUTES.explore}
    >
        <Stack.Screen name={ROUTES.explore} component={ExploreScreen} />
    </Stack.Navigator>
);

export default ExploreNavigation;
