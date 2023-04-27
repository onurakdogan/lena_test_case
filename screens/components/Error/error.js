import React from 'react';
import {View,Text} from 'react-native';

export default ErrorMessage = (props) => {
    const {message} = props
    return (
        <View>
            <Text>{message}</Text> 
        </View>
    );
}