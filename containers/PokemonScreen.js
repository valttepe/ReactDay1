import React from 'react';
import { View, Text } from 'react-native';

const PokemonScreen = (props) => {
    const {url} = props.navigation.state.params;
    console.log('Tuleeks se tänne' + url);
    return (
        <Text> `${url}` </Text>
    )
};

export default PokemonScreen;