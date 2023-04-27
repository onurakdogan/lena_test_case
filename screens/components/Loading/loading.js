import React from 'react';
import {View,ActivityIndicator} from 'react-native';

export default Loading = (props) => {
    return (
        <View style={props.style}>
            <ActivityIndicator animating size="large" />
        </View>
    );
}