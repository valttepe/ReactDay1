import React from 'react';
import { View, Text } from 'react-native';
import fetchGetJSON from '../util/fetchGetJSON';

class PokemonScreen extends React.Component {

    constructor(props) {
        super(props);
        this.url= props.navigation.state.params;
        this.state = {
            pokemon: null,
            isLoading: true,
        }
    };

    componentDidMount() {
        this.getPokemonDetails();
    };

    getPokemonDetails = () => {
        this.setState({
            isLoading: true,
        });
        fetchGetJSON(this.url.url)
            .then((result) => {
                // combine arrays: const arr3 = [...arr1, ...arr2]
                console.log(result);
                this.setState({
                    pokemon: result,
                    isLoading: false,
                    
                });
                return Promise.all('Promise');
            })
    }

    render() {
        console.log(this.url);
        console.log(this.state.pokemon);
        let name = "";
        if(this.state.pokemon != null) {
            console.log('Wuuu ');
            console.log(this.state.pokemon.forms[0].name);
            this.name = this.state.pokemon.forms[0].name;
        }
        console.log('Name: ' + this.name);
        return (
            <View>
                <Text>{this.url.url}</Text>
                <Text>{this.name}</Text>
            </View>
        );
    };
    
    
};

export default PokemonScreen;