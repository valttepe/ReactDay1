// React native imports
import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';

// Own imports
import Pokemon from './Pokemon';

const PokemonList = (props) => {
    console.log(props);
    // all data to objects from the props
    const { pokemons, handleNavigation, refreshing, onRefresh } = props;
    console.log(pokemons);

    return (
        <FlatList
            // Refreshing the content
            refreshControl = {
                <RefreshControl
                    refreshing = {refreshing}
                    onRefresh = {onRefresh}
                />
            }
            style = {styles.container}
            data = {pokemons}
            renderItem = {({ item }) => (
                // Items for the list
                // Item data comes here (Pokemon name)
                <Pokemon
                    name = {item.name}
                    url = {item.url}
                    onHandlePress = {handleNavigation}
                />
            )}
            keyExtractor = {(pokemon) => `${pokemon.name}`}           
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
});

PokemonList.defaultProps = {
    pokemons: [{ name: 'Missigno'}],
};

PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.shape({})),
    handleNavigation: PropTypes.func.isRequired,
    refreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
};

export default PokemonList;