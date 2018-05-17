import { createStackNavigator } from 'react-navigation';

import PokemonScreen from '../containers/PokemonScreen';
import HomeScreen from '../containers/HomeScreen';

const RootNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Pokemon: {
        screen: PokemonScreen,
        navigationOptions: {
            headerTitle: 'Pokemon'
        }
    },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerBackTitle: 'Back',
        headerTitle: 'Pokedex'
    }
});

export default RootNavigator;