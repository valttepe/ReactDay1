import React from 'react';
import PokemonList from '../components/PokemonList';
import fetchGetJSON from '../util/fetchGetJSON';
import { pokemonApiUrl } from '../constants/config';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: null,
            isLoading: true,
        };
        // Autorefresh
        // this.poller = null;
    };

    componentDidMount() {
        this.getPokemons()
        // Autorefresh
        // const TEN_SECONDS = 10000;
        // this.poller = setInterval(this.getPokemons, TEN_SECONDS);
    };
    /* 
    * Removes interval
    componentWIllUnmount() {
        clearInterval(this.poller);
    }*/ 

    getPokemons = () => {
        // Always use setState when adding/modifying states
        this.setState({
            isLoading: true,
        });
        fetchGetJSON(`${pokemonApiUrl}/pokemon/?limit=20&offset=20"`)
            .then((result) => {
                // var pokemons = result.results.map( Object.values );
                const pokemons = result.results;
                console.log(pokemons);
             
                this.setState({
                    isLoading: false,
                    pokemons
                });
                return Promise.all('Promise');
            })
            .catch(() => {
                this.setState({
                    isloading: false
                });
            });
    };

    handleNavigation = (routeName, params) => {
        const { navigation } = this.props;
        navigation.navigate(routeName, params);
    };

    render() {
        console.log(this.state);
        const { pokemons, isLoading } = this.state;

        return ( 
            <PokemonList
                pokemons = {pokemons}
                handleNavigation = {this.handleNavigation}
                refreshing = {isLoading}
                onRefresh = {this.getPokemons}
            />
        );
    };
}

export default HomeScreen;