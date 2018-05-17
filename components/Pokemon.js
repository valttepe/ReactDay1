import React from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity, StyleSheet, Text, View
} from 'react-native';

class Pokemon extends React.Component {
    onHandlePress = () => {
        // Get data from props ( 'this' is needed because its in class)
        const { url, onHandlePress } = this.props;
        console.log(onHandlePress);
        onHandlePress('Pokemon', { url });
    };
    // required in class ( returns something to show in UI)
    render() {
        // Get data from props 
        const { name, url, onHandlePress} = this.props
        return (
            <TouchableOpacity
                onPress = {this.onHandlePress}
                style = {styles.item}
                >
                <Text>{name}</Text>
            </TouchableOpacity>


        )
    }
}

// What kind of propTypes this class can get
Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onHandlePress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    item: {
        borderColor: '#000',
        // borderWidth: StyleSheet.hairlineWidth,
        borderWidth: 1,
        marginBottom: 20,
        padding: 15
    }
})

export default Pokemon;